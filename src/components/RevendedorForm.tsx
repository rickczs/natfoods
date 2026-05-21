"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { interestOptions } from "@/lib/data";

type FormStatus = "idle" | "sending" | "success" | "error";

export function RevendedorForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const isSending = status === "sending";
  const successMessage = useMemo(
    () => "Solicitacao recebida. Em breve o time comercial da Natfoods entra em contato para entender sua regiao, canal de venda e volume inicial.",
    []
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const whatsapp = String(formData.get("whatsapp") || "").replace(/\D/g, "");

    if (whatsapp.length < 10) {
      setStatus("error");
      setError("Informe um WhatsApp valido com DDD para o contato comercial.");
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
    <form onSubmit={handleSubmit} className="rounded-md border border-forest-900/10 bg-white p-5 shadow-premium sm:p-8">
      <div className="mb-6">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-earth">Cadastro comercial</p>
        <h2 className="mt-2 text-2xl font-black text-forest-900">Receba uma proposta para sua operacao</h2>
        <p className="mt-2 leading-7 text-forest-800/70">
          Preencha os dados para avaliarmos o melhor caminho: revenda, distribuicao, representacao ou marketplace.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nome" name="name" autoComplete="name" />
        <Field label="CPF ou CNPJ" name="document" />
        <Field label="WhatsApp" name="whatsapp" type="tel" autoComplete="tel" />
        <Field label="E-mail" name="email" type="email" autoComplete="email" />
        <Field label="Cidade/Estado" name="city" />
        <label className="grid gap-2 text-sm font-bold text-forest-900">
          Tipo de interesse comercial
          <select name="interest" required className="min-h-12 rounded-md border border-forest-900/15 bg-[#fffaf0] px-3 text-base font-medium outline-none focus:border-forest-700">
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
          className="rounded-md border border-forest-900/15 bg-[#fffaf0] px-3 py-3 text-base font-medium outline-none focus:border-forest-700"
          placeholder="Conte sobre sua loja, regiao, canal de venda ou volume estimado"
        />
      </label>
      <button
        disabled={isSending}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-forest-800 px-5 text-sm font-black text-white transition hover:bg-forest-700 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
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
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-forest-900">
      {label}
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className="min-h-12 rounded-md border border-forest-900/15 bg-[#fffaf0] px-3 text-base font-medium outline-none focus:border-forest-700"
      />
    </label>
  );
}
