"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { interestOptions } from "@/lib/data";

type FormStatus = "idle" | "sending" | "success" | "error";

type RevendedorFormProps = {
  variant?: "default" | "premium";
};

export function RevendedorForm({ variant = "default" }: RevendedorFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const isSending = status === "sending";
  const isPremium = variant === "premium";
  const controlClass = `min-h-12 min-w-0 rounded-md border px-3 text-base font-medium text-forest-950 outline-none focus:border-forest-700 ${
    isPremium ? "border-[#a98953]/45 bg-white shadow-inner" : "border-forest-900/15 bg-[#fffaf0]"
  }`;
  const successMessage = useMemo(
    () => "Solicitação recebida. Em breve o time comercial da Natfoods entra em contato para entender sua região, canal de venda e volume inicial.",
    []
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const whatsapp = String(formData.get("whatsapp") || "").replace(/\D/g, "");

    if (whatsapp.length < 10) {
      setStatus("error");
      setError("Informe um WhatsApp válido com DDD para o contato comercial.");
      return;
    }

    setStatus("sending");
    setError("");

    window.setTimeout(() => {
      setStatus("success");
      form.reset();
      // Futuro: enviar formData para API de lead, CRM, e-mail transacional ou automacao de WhatsApp.
    }, 450);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        isPremium
          ? "relative overflow-hidden rounded-md border border-[#8c6a32]/38 bg-[#f7e6bf]/94 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.82),0_16px_0_rgba(92,63,30,0.16),0_32px_75px_rgba(44,30,14,0.20)] sm:p-6"
          : "rounded-md border border-forest-900/10 bg-white p-4 shadow-premium sm:p-8"
      }
    >
      {isPremium ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/48 via-transparent to-[#7f5a2c]/8" />
        </>
      ) : null}
      <div className="relative">
      <div className="mb-6">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-earth">Cadastro comercial</p>
        <h2 className="mt-2 font-display text-2xl font-black leading-[1.04] text-forest-900">Receba uma proposta para sua operação</h2>
        <p className="mt-2 leading-7 text-forest-800/70">
          Preencha os dados para avaliarmos o melhor caminho: revenda, distribuição, representação ou marketplace.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nome" name="name" autoComplete="name" controlClass={controlClass} />
        <Field label="CPF ou CNPJ" name="document" controlClass={controlClass} />
        <Field label="WhatsApp" name="whatsapp" type="tel" autoComplete="tel" controlClass={controlClass} />
        <Field label="E-mail" name="email" type="email" autoComplete="email" controlClass={controlClass} />
        <Field label="Cidade/Estado" name="city" controlClass={controlClass} />
        <label className="grid gap-2 text-sm font-bold text-forest-900">
          Tipo de interesse comercial
          <select name="interest" required className={controlClass}>
            <option value="">Selecione</option>
            {interestOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-bold text-forest-900">
        Mensagem
        <textarea
          name="message"
          rows={5}
          className={`${controlClass} min-w-0 py-3`}
          placeholder="Conte sobre sua loja, região, canal de venda ou volume estimado"
        />
      </label>
      <button
        disabled={isSending}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-forest-800 px-4 text-center text-sm font-black leading-5 text-white transition hover:bg-forest-700 disabled:cursor-wait disabled:opacity-70 sm:w-auto sm:px-5"
      >
        {isSending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
        {isSending ? "Enviando..." : "Quero ser parceiro Natfoods"}
      </button>
      {status === "success" ? (
        <p className="mt-4 flex gap-3 rounded-md bg-forest-50 px-4 py-3 text-sm font-bold leading-6 text-forest-800">
          <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
          {successMessage}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm font-bold text-red-800">{error}</p>
      ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  controlClass
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  controlClass: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-forest-900">
      {label}
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className={controlClass}
      />
    </label>
  );
}
