import { Check, Zap } from 'lucide-react';

export default function SubscriptionPlans() {
  const plans = [
    {
      name: "Basic",
      storage: "50 GB",
      price: "799",
      period: "month",
      commission: "15%",
      features: [
        "50 GB Cloud Storage",
        "Mobile & Web Access",
        "Standard Support",
        "Download Offline",
        "Share Albums"
      ],
      popular: false
    },
    {
      name: "Pro",
      storage: "200 GB",
      price: "1,599",
      period: "month",
      commission: "20%",
      features: [
        "200 GB Cloud Storage",
        "Mobile & Web Access",
        "Priority Support",
        "Download Offline",
        "Share Albums",
        "Advanced Search",
        "Facial Recognition"
      ],
      popular: true
    },
    {
      name: "Premium",
      storage: "500 GB",
      price: "3,199",
      period: "month",
      commission: "25%",
      features: [
        "500 GB Cloud Storage",
        "Mobile & Web Access",
        "24/7 Premium Support",
        "Download Offline",
        "Share Albums",
        "Advanced Search",
        "Facial Recognition",
        "Auto Backup",
        "Custom Branding"
      ],
      popular: false
    },
    {
      name: "Ultimate",
      storage: "Unlimited",
      price: "6,399",
      period: "month",
      commission: "30%",
      features: [
        "Unlimited Cloud Storage",
        "Mobile & Web Access",
        "Dedicated Support",
        "Download Offline",
        "Share Albums",
        "Advanced Search",
        "Facial Recognition",
        "Auto Backup",
        "Custom Branding",
        "API Access"
      ],
      popular: false
    }
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pricing <span className="text-yellow-400">Plans</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Flexible storage plans for every need. Studios earn commission on every subscription.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 transition-all duration-500 hover:scale-105 ${
                plan.popular
                  ? 'border-2 border-yellow-400 shadow-[0_0_40px_rgba(255,215,0,0.3)]'
                  : 'border border-gray-800 hover:border-yellow-400'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-yellow-400 font-semibold text-sm mb-4">{plan.storage}</div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-gray-400 text-2xl">₹</span>
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>
                <div className="mt-3 inline-block px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full">
                  <span className="text-yellow-400 text-xs font-semibold">Studio earns {plan.commission}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Need a custom plan for your studio or enterprise?
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold text-lg rounded-md transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]">
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  );
}
