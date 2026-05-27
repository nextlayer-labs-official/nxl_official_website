import { Code, Server, Shield, Headphones } from "lucide-react";

const WhyChooseUs = () => {
    const features = [
        {
            icon: Shield,
            title: "Secure Infrastructure",
            desc: "Enterprise-grade network security, infrastructure architecture, and system protection designed for reliability."
        },
        {
            icon: Server,
            title: "Scalable Solutions",
            desc: "We design IT systems and software platforms that grow with your business operations."
        },
        {
            icon: Code,
            title: "Expert Development",
            desc: "Modern web applications and digital platforms tailored to your specific business workflows."
        },
        {
            icon: Headphones,
            title: "Reliable Support",
            desc: "Managed IT services, monitoring, and ongoing support to keep your systems running smoothly."
        }
    ];
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-6">
                    <h2 className="text-4xl font-bold text-slate-800">Why Choose <span className="text-brand-600">Next Layer Labs</span></h2>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">We combine infrastructure expertise, modern development, and
                        strategic consulting to deliver reliable technology solutions.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        features.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                                    <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className="text-brand-600 w-6 h-6" />
                                    </div>
                                    <h3 className="font-semibold text-lg text-slate-800 mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                </div>
                            )
                        }
                        )}
                </div>

            </div>
        </section>
    )
}

export default WhyChooseUs