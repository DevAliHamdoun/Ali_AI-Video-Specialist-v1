const PROJECTS = [
{
  num: '01',
  name: 'Nextlevel Studio',
  category: 'Client',
  desc: 'A polished studio identity focused on premium digital presentation, cinematic visuals, and a confident launch experience.',
  col1: [
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85'],

  col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85'
},
{
  num: '02',
  name: 'Aura Brand Identity',
  category: 'Personal',
  desc: 'A visual identity exploration built around soft contrast, memorable brand language, and flexible campaign-ready assets.',
  col1: [
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85'],

  col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85'
},
{
  num: '03',
  name: 'Solaris Digital',
  category: 'Client',
  desc: 'A warm digital campaign direction using bold imagery, clean hierarchy, and immersive layouts for a bright product story.',
  col1: [
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85'],

  col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85'
},
{
  num: '04',
  name: 'Lumen Reels',
  category: 'Client',
  desc: 'A series of high-energy AI short-form reels engineered to capture attention in the first second and hold it to the cut.',
  col1: [
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85'],

  col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85'
},
{
  num: '05',
  name: 'Echo Character Pack',
  category: 'Personal',
  desc: 'A cast of AI-animated characters built for serialized storytelling, with consistent identities across scenes and styles.',
  col1: [
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85'],

  col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85'
},
{
  num: '06',
  name: 'Vertex Commercial',
  category: 'Client',
  desc: 'A cinematic AI-generated brand commercial blending product hero shots with stylized environments and dynamic camera work.',
  col1: [
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85'],

  col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85'
},
{
  num: '07',
  name: 'Trendlab Series',
  category: 'Client',
  desc: 'A trend-driven content series that translated emerging cultural moments into platform-native videos within 24-hour cycles.',
  col1: [
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85'],

  col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85'
},
{
  num: '08',
  name: 'Halo Visuals',
  category: 'Personal',
  desc: 'An AI image-generation art direction project exploring high-contrast lighting, surreal environments, and editorial composition.',
  col1: [
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85'],

  col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85'
}];


const TOTAL = PROJECTS.length;
const STACK_TOP = 'var(--project-stack-top)';
const STACK_GAP = 'var(--project-stack-gap)';

const getStackTop = (i) => {
  if (i === 0) return STACK_TOP;
  return `calc(${STACK_TOP} + ${Array.from({ length: i }, () => STACK_GAP).join(' + ')})`;
};

function ProjectCard({ project, index, progress }) {
  const targetScale = 1 - (TOTAL - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / TOTAL, 1], [1, targetScale]);
  const imgRadius = 'clamp(20px, 4vw, 60px)';

  return (
    <motion.div
      style={{
        position: 'sticky',
        top: getStackTop(index),
        zIndex: index + 1,
        scale,
        transformOrigin: 'top center',
        background: '#0C0C0C',
        marginBottom: '1rem'
      }}
      className="w-full rounded-[40px] border-2 border-[#D7E2EA] p-4 md:p-6 xl:rounded-[60px] xl:p-8">
      
      <div className="project-card-header mb-4 xl:mb-6">
        <span className="project-card-number font-black">{project.num}</span>
        <div className="project-card-title-block flex flex-col gap-1">
          <span className="project-card-category font-light uppercase tracking-widest">{project.category}</span>
          <span className="project-card-title font-medium uppercase">{project.name}</span>
        </div>
        <LiveProjectButton />
      </div>
      <div className="project-media-grid">
        <div className="project-side-column">
          <div className="project-description-card flex flex-col justify-center border border-[#D7E2EA]/30 p-4 xl:p-6" style={{ borderRadius: imgRadius, background: 'rgba(215, 226, 234, 0.04)' }}>
            <p className="project-description-copy font-light leading-relaxed" style={{ color: '#D7E2EA', opacity: 0.78, fontSize: 'clamp(0.78rem, 1.25vw, 1rem)' }}>{project.desc}</p>
          </div>
        </div>
        <div className="project-main-wrap">
          <img src={project.col2} alt="" loading="lazy" className="project-main-image w-full object-cover" style={{ borderRadius: imgRadius }} />
        </div>
      </div>
    </motion.div>);

}

function ProjectsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="projects" className="project-stack-section rounded-t-[40px] -mt-10 z-10 relative px-5 pt-20 pb-32 xl:rounded-t-[60px] xl:-mt-14 xl:px-10 xl:pt-32" style={{ background: '#0C0C0C' }}>
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center mb-16 xl:mb-28 leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>PROJECTS</h2>
      </FadeIn>
      <div ref={containerRef} className="project-scroll-track">
        {PROJECTS.map((p, i) =>
        <ProjectCard key={p.num} project={p} index={i} progress={scrollYProgress} />
        )}
      </div>
    </section>);

}

function BackToTopButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        right: 'clamp(16px, 3vw, 32px)',
        bottom: 'clamp(16px, 3vw, 32px)',
        width: 52,
        height: 52,
        borderRadius: '9999px',
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 16px rgba(181, 1, 167, 0.35), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px',
        border: 'none',
        cursor: 'pointer',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
        zIndex: 50,
        fontFamily: 'inherit'
      }}
      className="back-to-top-button hover:opacity-90">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>);
}

function App() {
  return (
    <div style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <BackToTopButton />
    </div>);

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
