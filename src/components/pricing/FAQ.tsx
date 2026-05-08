import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-gray-900 font-medium">{question}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`flex-shrink-0 ml-4 transform transition-transform ${isOpen ? "rotate-45" : ""}`}
        >
          <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      {isOpen && (
        <div className="pb-5 pr-12">
          <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

const faqData = [
  {
    question: "How does Notion AI use my data?",
    answer: "Notion AI is designed with privacy in mind. Your data is used only to generate responses and is not used to train AI models. Enterprise customers have zero data retention with LLM providers."
  },
  {
    question: "Where can I find my invoices?",
    answer: "You can find your invoices in Settings & Members > Billing. From there, you can view, download, and manage all your billing history and invoices."
  },
  {
    question: "What are your accepted payment methods?",
    answer: "We accept all major credit cards including Visa, Mastercard, American Express, and Discover. Enterprise customers can also pay via invoice."
  },
  {
    question: "What is a block?",
    answer: "Blocks are the basic units of content in Notion. Everything you add to a page - text, images, tables, toggles, embeds - is a block. You can easily move, duplicate, and transform blocks."
  },
  {
    question: "What happens when I go over the block storage limit on a Free Plan?",
    answer: "If you exceed the block limit on the Free plan with 2+ members, you'll need to upgrade to continue adding content. Existing content remains accessible."
  },
  {
    question: "Do you offer student discounts?",
    answer: "Yes! Students and educators can get Notion Plus for free with a valid school email address. Visit notion.com/education to learn more and sign up."
  },
  {
    question: "What do the different analytics tiers mean?",
    answer: "Analytics tiers determine the depth of insights you can access. Basic analytics are available on all plans, while advanced analytics with detailed metrics are available on Business and Enterprise."
  },
  {
    question: "How is pricing calculated for the paid plans?",
    answer: "Pricing is per member per month. A member is anyone who can access and edit content in your workspace. Guests with limited permissions are free."
  },
  {
    question: "How do I get charged when I add members to my workspace?",
    answer: "When you add a new member, you'll be charged a prorated amount for the remainder of your billing cycle. The full price applies from the next billing date."
  },
  {
    question: "How does adding and removing members work?",
    answer: "You can add or remove members at any time from Settings. When removing members, you'll receive credit toward your next bill for the unused portion of their subscription."
  },
  {
    question: "How are paid seats counted?",
    answer: "A paid seat is counted for each workspace member who has edit access. Guest collaborators with limited permissions don't count toward your seat limit."
  },
  {
    question: "What happens when I change plans?",
    answer: "When you upgrade, you'll be charged the prorated difference immediately. When downgrading, you'll receive credit toward future bills."
  },
  {
    question: "How do I cancel my paid plan?",
    answer: "You can cancel your subscription anytime from Settings > Billing. You'll continue to have access until the end of your billing period, then your workspace will convert to the Free plan."
  },
  {
    question: "What happens if my payment fails? Like if my credit card expires?",
    answer: "We'll notify you via email and give you a grace period to update your payment method. If not resolved, your workspace may be downgraded to the Free plan."
  },
  {
    question: "Can I change my payment method?",
    answer: "Yes, you can update your payment method anytime in Settings > Billing. The new payment method will be used for your next billing cycle."
  },
  {
    question: "How do refunds work?",
    answer: "We offer refunds on a case-by-case basis. Contact our support team within 30 days of purchase to request a refund."
  },
  {
    question: "What if I live in a region with a mandatory refund policy?",
    answer: "We comply with all regional consumer protection laws. If you're entitled to a refund under local law, please contact our support team."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 border-t border-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Questions & answers
      </h2>

      <div className="max-w-3xl">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}

        <div className="mt-8 text-sm text-gray-600">
          <p>
            Still have more questions?{" "}
            <a href="#" className="text-gray-900 hover:underline">
              Learn more in our help center
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}