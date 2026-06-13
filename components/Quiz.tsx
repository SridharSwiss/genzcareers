'use client';

import { useState } from 'react';
import type { QuizQuestion } from '@/lib/types';

export default function Quiz({ questions, onPass }: {
  questions: QuizQuestion[];
  onPass?: (pct: number) => void;
}) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = questions.reduce((n, q, i) => (answers[i] === q.ans ? n + 1 : n), 0);
  const pct = Math.round((score / questions.length) * 100);

  function submit() {
    setSubmitted(true);
    if (pct >= 80) onPass?.(pct);
  }

  function retake() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <div>
      <div className="mb-1 font-bold text-white">Knowledge Check</div>
      <div className="mb-6 text-sm text-slate-500">
        {questions.length} questions · Select the best answer for each
      </div>

      {questions.map((q, qi) => (
        <div key={qi} className="mb-7">
          <div className="mb-3.5 text-[0.95rem] font-semibold text-white">
            {qi + 1}. {q.q}
          </div>
          <div className="space-y-2.5">
            {q.opts.map((opt, oi) => {
              const selected = answers[qi] === oi;
              let cls = 'border-white/10 hover:border-primary hover:bg-primary/[0.08]';
              if (submitted) {
                if (oi === q.ans) cls = 'border-emerald-500 bg-emerald-500/10 text-emerald-400';
                else if (selected) cls = 'border-red-500 bg-red-500/10 text-red-400';
                else cls = 'border-white/10 opacity-60';
              } else if (selected) {
                cls = 'border-primary bg-primary/[0.08]';
              }
              return (
                <button
                  key={oi}
                  disabled={submitted}
                  onClick={() => setAnswers({ ...answers, [qi]: oi })}
                  className={`flex w-full items-center gap-2.5 rounded-lg border px-4 py-3 text-left text-sm transition-all ${cls}`}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface font-mono text-[0.7rem] font-bold">
                    {'ABCD'[oi]}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div className="mt-6 flex items-center gap-4">
        {!submitted ? (
          <button
            className="btn-primary"
            disabled={Object.keys(answers).length < questions.length}
            onClick={submit}
          >
            Submit Answers
          </button>
        ) : (
          <>
            <button className="btn-ghost" onClick={retake}>Retake Quiz</button>
            <span className={`text-base font-bold ${pct >= 80 ? 'text-emerald-400' : 'text-amber-400'}`}>
              {score}/{questions.length} correct ({pct}%)
              {pct >= 80 ? ' 🏆 Outstanding!' : ' — review the concepts and try again'}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
