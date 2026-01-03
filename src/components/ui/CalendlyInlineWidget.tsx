'use client'

export default function CalendlyInlineWidget() {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div
        className="calendly-inline-widget w-full"
        data-url="https://calendly.com/helbinrapheal/30min?hide_event_type_details=1&hide_gdpr_banner=1"
        style={{
          minWidth: '320px',
          height: '700px'
        }}
      />
    </div>
  );
}
