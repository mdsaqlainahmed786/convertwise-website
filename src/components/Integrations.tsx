import { GoogleMeetIcon, MicrosoftTeamsIcon, ZoomIcon } from './icons/PlatformIcons';

export function Integrations() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A0400] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/20 to-transparent" />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(232,148,34,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <p
          className="mb-10 text-gray-400 text-sm tracking-wide uppercase"
        >
          Easily integrates with your existing meeting tools
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          <IntegrationItem
            icon={<GoogleMeetIcon size={24} />}
            name="Google Meet"
            gradient="from-[#00832D] to-[#00AC47]"
            delay={0}
          />

          <IntegrationItem
            icon={<MicrosoftTeamsIcon size={24} />}
            name="Microsoft Teams"
            gradient="from-[#5059C9] to-[#7B83EB]"
            delay={0.1}
          />

          <IntegrationItem
            icon={<ZoomIcon size={24} />}
            name="Zoom"
            gradient="from-[#2D8CFF] to-[#0B5CFF]"
            delay={0.2}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E89422]/15 to-transparent" />
    </section>
  );
}

function IntegrationItem({
  icon,
  name,
  gradient,
  delay,
}: {
  icon: React.ReactNode;
  name: string;
  gradient: string;
  delay: number;
}) {
  return (
    <div
      className="flex items-center gap-4 px-6 py-4 bg-white/[0.04] border border-white/[0.08] rounded-2xl hover:bg-white/[0.07] hover:border-[#E89422]/25 transition-colors group"
    >
      <div
        className={`w-11 h-11 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
      >
        {icon}
      </div>
      <span className="text-lg text-white/90 group-hover:text-white transition-colors">{name}</span>
    </div>
  );
}
