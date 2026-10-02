import { faqs } from "@/data/site-data";

export function FaqList() {
  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <details className="faq-item" key={faq.question}>
          <summary><span className="faq-number">0{index + 1}</span>{faq.question}<span className="faq-plus" aria-hidden="true">+</span></summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
