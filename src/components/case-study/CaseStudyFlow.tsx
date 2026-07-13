import { CaseStudyStep } from "@/types/case-study";

interface CaseStudyFlowProps {
  steps: CaseStudyStep[];
}

// Server-rendered vertical flow diagram. Number badges sit on a connecting
// line; an optional phase chip marks where a new group of steps begins.
const CaseStudyFlow = ({ steps }: CaseStudyFlowProps) => {
  return (
    <ol className="relative ml-4 border-l border-gray-300 dark:border-gray-700">
      {steps.map((step, index) => (
        <li key={step.label} className={index === steps.length - 1 ? "relative pl-8" : "relative pl-8 pb-8"}>
          {step.phase && (
            <span className="mb-2 inline-block rounded-full border border-gray-300 dark:border-gray-700 px-3 py-0.5 text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400">
              {step.phase}
            </span>
          )}
          <span
            aria-hidden="true"
            className="absolute -left-[15px] top-0 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 font-mono text-xs text-blue-600 dark:text-blue-400"
          >
            {index + 1}
          </span>
          <h3 className="text-sm font-semibold dark:text-gray-200">{step.label}</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{step.detail}</p>
        </li>
      ))}
    </ol>
  );
};

export default CaseStudyFlow;
