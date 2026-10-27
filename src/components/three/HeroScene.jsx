import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { RoundedBox, Float, ContactShadows, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

/* ═══════════════════════════════════════════════════════════════
   CANVAS RETINA 2D TEXTURE GENERATORS
   Matches the exact reference visual design
═══════════════════════════════════════════════════════════════ */

function roundRect(ctx, x, y, w, h, r = 8) {
  if (typeof r === 'number') {
    r = [r, r, r, r];
  }
  const [tl, tr, br, bl] = r;
  ctx.beginPath();
  ctx.moveTo(x + tl, y);
  ctx.lineTo(x + w - tr, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + tr);
  ctx.lineTo(x + w, y + h - br);
  ctx.quadraticCurveTo(x + w, y + h, x + w - br, y + h);
  ctx.lineTo(x + bl, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - bl);
  ctx.lineTo(x, y + tl);
  ctx.quadraticCurveTo(x, y, x + tl, y);
  ctx.closePath();
  ctx.fill();
}

/** Monitor Screen Texture: TechCrestaX homepage with dramatic mountain landscape */
function makeMonitorTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1920;
  canvas.height = 1180;
  const ctx = canvas.getContext('2d');

  function drawContent(img = null) {
    // 1. Deep cinematic background
    const bgGrad = ctx.createLinearGradient(0, 0, 1920, 1180);
    bgGrad.addColorStop(0, '#060A14');
    bgGrad.addColorStop(0.5, '#091020');
    bgGrad.addColorStop(1, '#05070E');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1920, 1180);

    // 2. Right Side: Dramatic Mountain Landscape
    if (img && img.complete && img.naturalWidth > 0) {
      ctx.save();
      ctx.drawImage(img, 850, 76, 1070, 1064);
      // Seamless gradient fade on the left of the image
      const fade = ctx.createLinearGradient(850, 0, 1180, 0);
      fade.addColorStop(0, '#060A14');
      fade.addColorStop(0.5, 'rgba(6,10,20,0.7)');
      fade.addColorStop(1, 'transparent');
      ctx.fillStyle = fade;
      ctx.fillRect(850, 76, 400, 1064);
      ctx.restore();
    } else {
      // Procedural sunset mountain landscape fallback
      const skyGrad = ctx.createLinearGradient(900, 76, 1920, 800);
      skyGrad.addColorStop(0, '#1E102A');
      skyGrad.addColorStop(0.35, '#843828');
      skyGrad.addColorStop(0.7, '#D46538');
      skyGrad.addColorStop(1, '#FF9B42');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(900, 76, 1020, 1064);

      // Distant mountain ridge
      ctx.fillStyle = '#2B1622';
      ctx.beginPath();
      ctx.moveTo(900, 800);
      ctx.lineTo(1100, 520);
      ctx.lineTo(1250, 640);
      ctx.lineTo(1420, 410);
      ctx.lineTo(1600, 580);
      ctx.lineTo(1780, 360);
      ctx.lineTo(1920, 520);
      ctx.lineTo(1920, 1140);
      ctx.lineTo(900, 1140);
      ctx.closePath();
      ctx.fill();

      // Foreground snow-capped dark mountain peak
      ctx.fillStyle = '#140D1A';
      ctx.beginPath();
      ctx.moveTo(1050, 1140);
      ctx.lineTo(1380, 480);
      ctx.lineTo(1580, 750);
      ctx.lineTo(1850, 390);
      ctx.lineTo(1920, 520);
      ctx.lineTo(1920, 1140);
      ctx.closePath();
      ctx.fill();

      // Snow highlights
      ctx.fillStyle = '#E8BD9F';
      ctx.beginPath();
      ctx.moveTo(1380, 480);
      ctx.lineTo(1410, 550);
      ctx.lineTo(1370, 570);
      ctx.lineTo(1380, 480);
      ctx.fill();
    }

    // Vignette on bottom of landscape
    const btmFade = ctx.createLinearGradient(0, 850, 0, 1140);
    btmFade.addColorStop(0, 'transparent');
    btmFade.addColorStop(1, '#060A14');
    ctx.fillStyle = btmFade;
    ctx.fillRect(800, 850, 1120, 290);

    // Warm radial lighting atmosphere
    const glow = ctx.createRadialGradient(400, 500, 0, 400, 500, 750);
    glow.addColorStop(0, 'rgba(255, 107, 74, 0.16)');
    glow.addColorStop(0.6, 'rgba(139, 92, 246, 0.05)');
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 76, 1920, 1064);

    // ── Global Navbar ──
    ctx.fillStyle = 'rgba(7, 12, 24, 0.88)';
    ctx.fillRect(0, 0, 1920, 76);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.fillRect(0, 75, 1920, 1);

    // Logo
    const lg = ctx.createLinearGradient(60, 22, 94, 54);
    lg.addColorStop(0, '#FF6B4A');
    lg.addColorStop(1, '#FFB627');
    ctx.fillStyle = lg;
    roundRect(ctx, 60, 22, 34, 34, 9);
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(77, 39, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.font = 'bold 24px -apple-system, sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('TechCresta', 106, 46);
    ctx.fillStyle = '#FF6B4A';
    ctx.fillText('X', 234, 46);

    // Nav Links
    const links = ['Home', 'Services', 'Work', 'About'];
    links.forEach((l, i) => {
      ctx.fillStyle = i === 0 ? '#FF6B4A' : '#94A3B8';
      ctx.font = i === 0 ? 'bold 15px sans-serif' : '500 15px sans-serif';
      ctx.fillText(l, 860 + i * 110, 45);
    });

    // Nav CTA
    const navCta = ctx.createLinearGradient(1690, 20, 1850, 56);
    navCta.addColorStop(0, '#FF6B4A');
    navCta.addColorStop(1, '#FFB627');
    ctx.fillStyle = navCta;
    roundRect(ctx, 1690, 20, 160, 38, 19);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('Get In Touch →', 1720, 44);

    // ── Left Hero Headline & Messaging ──
    // Eyebrow
    ctx.fillStyle = '#FF6B4A';
    ctx.fillRect(80, 230, 26, 2);
    ctx.font = 'bold 13px monospace';
    ctx.fillText('DIGITAL ENGINEERING STUDIO', 116, 235);

    // Giant Headline
    ctx.font = '900 78px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('Performance-Driven', 80, 335);

    ctx.fillText('Websites That', 80, 425);

    const grwGrad = ctx.createLinearGradient(80, 440, 650, 520);
    grwGrad.addColorStop(0, '#FF6B4A');
    grwGrad.addColorStop(0.5, '#FF982A');
    grwGrad.addColorStop(1, '#FFB627');
    ctx.fillStyle = grwGrad;
    ctx.fillText('Grow Businesses.', 80, 515);

    // Subtitle
    ctx.font = '400 22px sans-serif';
    ctx.fillStyle = '#94A3B8';
    ctx.fillText('Fast, reliable web platforms built for measurable growth', 80, 580);
    ctx.fillText('and real revenue.', 80, 612);

    // CTAs
    ctx.fillStyle = navCta;
    roundRect(ctx, 80, 660, 190, 52, 26);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('Get In Touch →', 114, 693);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
    ctx.lineWidth = 1.5;
    roundRect(ctx, 290, 660, 160, 52, 26);
    ctx.fillStyle = '#CBD5E1';
    ctx.fillText('Our Work →', 325, 693);

    // System status footer inside monitor
    ctx.fillStyle = 'rgba(6, 10, 20, 0.95)';
    ctx.fillRect(0, 1140, 1920, 40);
    ctx.fillStyle = '#64748B';
    ctx.font = '12px monospace';
    ctx.fillText('TechCrestaX Studio v3.0 · Full-Stack & 3D WebGL Platform', 80, 1165);
    ctx.fillStyle = '#10B981';
    ctx.fillText('● PRODUCTION LIVE', 1710, 1165);
  }

  drawContent();

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 16;
  tex.needsUpdate = true;

  // Try loading authentic volcanic/mountain backdrop
  if (typeof window !== 'undefined') {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = '/hero-mountains.jpg';
    img.onload = () => {
      drawContent(img);
      tex.needsUpdate = true;
    };
  }

  return tex;
}

/** Laptop Screen Texture: "Featured Projects" portfolio gallery */
function makeLaptopTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 760;
  const ctx = canvas.getContext('2d');

  // Dark IDE/Platform Background
  ctx.fillStyle = '#080E1C';
  ctx.fillRect(0, 0, 1200, 760);

  // Top window chrome
  ctx.fillStyle = '#0E172B';
  ctx.fillRect(0, 0, 1200, 50);
  ['#FF5F57', '#FEBC2E', '#28C840'].forEach((c, i) => {
    ctx.fillStyle = c;
    ctx.beginPath();
    ctx.arc(25 + i * 20, 25, 6, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = '#94A3B8';
  ctx.font = 'bold 15px sans-serif';
  ctx.fillText('Featured Projects', 90, 31);

  ctx.fillStyle = '#FF6B4A';
  ctx.font = 'bold 13px sans-serif';
  ctx.fillText('View All →', 1090, 31);

  // 3 Project Cards
  const cards = [
    { title: 'Scalpel.in Platform', tag: 'Medical / Healthcare', color: '#38BDF8' },
    { title: 'Agriqen Seeds Biotech', tag: 'AgTech & Biotech', color: '#10B981' },
    { title: 'TechCresta Core SaaS', tag: 'Cloud Platform', color: '#FF6B4A' },
  ];

  cards.forEach((c, i) => {
    const cx = 40 + i * 375;
    const cy = 80;
    const cw = 350;
    const ch = 630;

    // Card container
    ctx.fillStyle = '#101B30';
    roundRect(ctx, cx, cy, cw, ch, 16);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Card Thumbnail preview
    const tGrad = ctx.createLinearGradient(cx, cy, cx + cw, cy + 340);
    tGrad.addColorStop(0, c.color + '40');
    tGrad.addColorStop(1, '#1A2944');
    ctx.fillStyle = tGrad;
    roundRect(ctx, cx + 16, cy + 16, cw - 32, 340, 12);

    // Thumbnail interior mockup illustration
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    roundRect(ctx, cx + 32, cy + 40, cw - 64, 40, 8);
    roundRect(ctx, cx + 32, cy + 100, (cw - 64) * 0.6, 24, 6);
    roundRect(ctx, cx + 32, cy + 140, cw - 64, 160, 8);

    // Category Tag
    ctx.fillStyle = c.color;
    ctx.font = 'bold 13px monospace';
    ctx.fillText(c.tag.toUpperCase(), cx + 24, cy + 400);

    // Title
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 22px -apple-system, sans-serif';
    ctx.fillText(c.title, cx + 24, cy + 440);

    // Description lines
    ctx.fillStyle = '#94A3B8';
    ctx.font = '14px sans-serif';
    ctx.fillText('High-performance web architecture', cx + 24, cy + 480);
    ctx.fillText('engineered for rapid scalability.', cx + 24, cy + 506);

    // View case study button
    ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
    roundRect(ctx, cx + 24, cy + 540, cw - 48, 44, 10);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('Explore Project ↗', cx + 105, cy + 568);
  });

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 16;
  tex.needsUpdate = true;
  return tex;
}

/** Mobile Screen Texture: Responsive mobile site with 25+ happy clients */
function makeMobileTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 1260;
  const ctx = canvas.getContext('2d');

  // Background
  const grad = ctx.createLinearGradient(0, 0, 600, 1260);
  grad.addColorStop(0, '#060B14');
  grad.addColorStop(0.5, '#0A1224');
  grad.addColorStop(1, '#050810');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 600, 1260);

  // Status bar
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 20px -apple-system, sans-serif';
  ctx.fillText('9:41', 40, 48);
  ctx.fillText('5G  100%', 460, 48);

  // Logo Header
  ctx.fillStyle = '#FF6B4A';
  roundRect(ctx, 40, 88, 38, 38, 10);
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(59, 107, 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.font = 'bold 22px -apple-system, sans-serif';
  ctx.fillText('TechCrestaX', 90, 115);

  // Eyebrow
  ctx.fillStyle = '#FF6B4A';
  ctx.font = 'bold 12px monospace';
  ctx.fillText('— DIGITAL ENGINEERING STUDIO', 40, 185);

  // Headline
  ctx.font = '900 44px -apple-system, sans-serif';
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('Performance-', 40, 245);
  ctx.fillText('Driven Websites', 40, 300);

  const hg = ctx.createLinearGradient(40, 310, 400, 360);
  hg.addColorStop(0, '#FF6B4A');
  hg.addColorStop(1, '#FFB627');
  ctx.fillStyle = hg;
  ctx.fillText('That Grow.', 40, 355);

  // Subtitle
  ctx.font = '400 17px sans-serif';
  ctx.fillStyle = '#94A3B8';
  ctx.fillText('Built for measurable growth and real revenue.', 40, 405);

  // CTA button
  ctx.fillStyle = hg;
  roundRect(ctx, 40, 445, 230, 56, 28);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 17px sans-serif';
  ctx.fillText('Get In Touch →', 78, 480);

  // 25+ Happy Clients Section (exactly as in the reference!)
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  roundRect(ctx, 40, 540, 520, 140, 20);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 17px -apple-system, sans-serif';
  ctx.fillText('25+ Happy Clients', 65, 580);
  ctx.fillStyle = '#FFB627';
  ctx.fillText('★★★★★', 240, 580);

  // 4 Avatars
  const avatars = ['#FF6B4A', '#8B5CF6', '#10B981', '#38BDF8'];
  avatars.forEach((col, i) => {
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(80 + i * 44, 630, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#060B14';
    ctx.lineWidth = 3;
    ctx.stroke();
    // Inner initial
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 13px sans-serif';
    ctx.fillText(['R', 'A', 'S', 'K'][i], 74 + i * 44, 635);
  });

  // Services preview cards
  const miniSvcs = [
    { title: 'Web Development', desc: 'Custom platforms & portals' },
    { title: 'UI/UX Design', desc: 'Modern high-converting UX' },
    { title: 'SEO & Growth', desc: 'Accelerated organic search' },
  ];
  miniSvcs.forEach((ms, idx) => {
    const my = 710 + idx * 135;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    roundRect(ctx, 40, my, 520, 115, 16);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 19px sans-serif';
    ctx.fillText(ms.title, 65, my + 45);
    ctx.fillStyle = '#94A3B8';
    ctx.font = '14px sans-serif';
    ctx.fillText(ms.desc, 65, my + 80);
  });

  // Mobile Bottom Tab Bar
  ctx.fillStyle = '#080E1C';
  roundRect(ctx, 30, 1150, 540, 75, 38);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 15px sans-serif';
  ctx.fillText('⚡ 100% Owned Code · Free 1 Yr Support', 110, 1195);

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 16;
  tex.needsUpdate = true;
  return tex;
}

/** Floating Code Editor Window Texture */
function makeCodeTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 560;
  const ctx = canvas.getContext('2d');

  // Window background
  ctx.fillStyle = '#111422';
  ctx.fillRect(0, 0, 800, 560);

  // Window header
  ctx.fillStyle = '#181C2E';
  ctx.fillRect(0, 0, 800, 46);
  ['#FF5F57', '#FEBC2E', '#28C840'].forEach((c, i) => {
    ctx.fillStyle = c;
    ctx.beginPath();
    ctx.arc(22 + i * 20, 23, 6, 0, Math.PI * 2);
    ctx.fill();
  });

  // Tabs
  ctx.fillStyle = '#111422';
  roundRect(ctx, 95, 8, 160, 38, [8, 8, 0, 0]);
  ctx.fillStyle = '#FF6B4A';
  ctx.font = 'bold 13px monospace';
  ctx.fillText('⚛ index.tsx', 110, 32);

  ctx.fillStyle = '#717993';
  ctx.fillText('📄 globals.css', 280, 32);

  // Line numbers & Code
  const code = [
    { n: '11', t: 'const Hero = () => {', c: '#89B4FA' },
    { n: '12', t: '  return (', c: '#CBA6F7' },
    { n: '13', t: '    <section className="hero">', c: '#F38BA8' },
    { n: '14', t: '      <h1>', c: '#F38BA8' },
    { n: '15', t: '        We Build', c: '#CDD6F4' },
    { n: '16', t: '        <span>Digital</span>', c: '#FAB387' },
    { n: '17', t: '        Experiences', c: '#CDD6F4' },
    { n: '18', t: '      </h1>', c: '#F38BA8' },
    { n: '19', t: '      <p>Fast, conversion-focused</p>', c: '#A6E3A1' },
    { n: '20', t: '    </section>', c: '#F38BA8' },
    { n: '21', t: '  );', c: '#CBA6F7' },
    { n: '22', t: '};', c: '#89B4FA' },
  ];

  code.forEach((l, i) => {
    const y = 80 + i * 32;
    ctx.fillStyle = '#45475A';
    ctx.font = '13px monospace';
    ctx.fillText(l.n, 20, y);
    ctx.fillStyle = l.c;
    ctx.fillText(l.t, 60, y);
  });

  // Cursor
  ctx.fillStyle = '#FF6B4A';
  ctx.fillRect(360, 286, 9, 18);

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 16;
  tex.needsUpdate = true;
  return tex;
}

/** Helper to create frosted glass pill badge textures */
function makePillTexture({ icon, title, subtitle = '', accent = '#FF6B4A' }) {
  const canvas = document.createElement('canvas');
  canvas.width = 460;
  canvas.height = 140;
  const ctx = canvas.getContext('2d');

  // Frosted Glass Dark Fill
  ctx.fillStyle = '#0B1324';
  roundRect(ctx, 4, 4, 452, 132, 66);

  // Border
  ctx.strokeStyle = 'rgba(255, 107, 74, 0.45)';
  ctx.lineWidth = 3;
  roundRect(ctx, 4, 4, 452, 132, 66);
  ctx.stroke();

  // Icon Badge circle
  ctx.fillStyle = accent + '26';
  ctx.beginPath();
  ctx.arc(66, 70, 40, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = accent;
  ctx.font = 'bold 34px sans-serif';
  ctx.fillText(icon, 48, 82);

  // Title
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 26px -apple-system, sans-serif';
  ctx.fillText(title, 126, subtitle ? 66 : 78);

  if (subtitle) {
    ctx.fillStyle = accent;
    ctx.font = 'bold 20px monospace';
    ctx.fillText(subtitle, 126, 98);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 16;
  tex.needsUpdate = true;
  return tex;
}


/* ═══════════════════════════════════════════════════════════════
   AUTHENTIC 3D MESH WORKSTATION COMPONENTS
═══════════════════════════════════════════════════════════════ */

/**
 * 3D Desktop Studio Monitor (Apple iMac/Studio Display Style)
 * Includes distinct silver chin, black bezel, glass screen, L-stand
 */
function RealDesktopMonitor({ monitorTex, mouseRef }) {
  const group = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    const targetRotY = -0.16 + Math.sin(t * 0.35) * 0.03 + mouseRef.current.x * 0.08;
    const targetRotX = 0.04 + Math.sin(t * 0.25) * 0.015 - mouseRef.current.y * 0.05;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetRotY, 4.0, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetRotX, 4.0, delta);
  });

  return (
    <group ref={group} position={[0.2, 0.15, 0]}>
      {/* ── 1. Main Unibody Aluminum Enclosure ── */}
      <RoundedBox args={[4.4, 2.9, 0.20]} radius={0.10} smoothness={6} position={[0, 0.45, -0.05]} castShadow receiveShadow>
        <meshStandardMaterial color="#222834" metalness={0.90} roughness={0.20} envMapIntensity={2.0} />
      </RoundedBox>

      {/* Perimeter Chamfered Metallic Edge Frame */}
      <mesh position={[0, 0.45, 0.05]}>
        <boxGeometry args={[4.44, 2.94, 0.015]} />
        <meshStandardMaterial color="#94A3B8" metalness={0.98} roughness={0.08} envMapIntensity={2.5} />
      </mesh>

      {/* Recessed Black Inner Border */}
      <RoundedBox args={[4.28, 2.76, 0.02]} radius={0.04} smoothness={4} position={[0, 0.45, 0.06]}>
        <meshStandardMaterial color="#05070C" metalness={0.3} roughness={0.4} />
      </RoundedBox>

      {/* ── 2. Screen Surface (Displaying Website with Sunset Mountains) ── */}
      <mesh position={[0, 0.58, 0.075]} receiveShadow>
        <planeGeometry args={[4.16, 2.38]} />
        <meshStandardMaterial
          map={monitorTex}
          roughness={0.08}
          metalness={0.0}
          emissive="#1E1B38"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Anti-reflective Glass Layer */}
      <mesh position={[0, 0.58, 0.08]}>
        <planeGeometry args={[4.16, 2.38]} />
        <meshPhysicalMaterial
          transparent
          opacity={0.08}
          roughness={0.03}
          metalness={0.1}
          transmission={0.9}
          ior={1.5}
          color="#E2E8F0"
        />
      </mesh>

      {/* ── 3. iMac Iconic Brushed Aluminum Chin (Bottom bar) ── */}
      <mesh position={[0, -0.72, 0.072]}>
        <boxGeometry args={[4.16, 0.28, 0.02]} />
        <meshStandardMaterial color="#8896AB" metalness={0.92} roughness={0.15} envMapIntensity={2.0} />
      </mesh>
      {/* Chin centered logo dot */}
      <mesh position={[0, -0.72, 0.085]}>
        <circleGeometry args={[0.04, 24]} />
        <meshStandardMaterial color="#334155" metalness={0.95} roughness={0.1} />
      </mesh>

      {/* Top Webcam Pinhole */}
      <mesh position={[0, 1.83, 0.075]}>
        <circleGeometry args={[0.018, 16]} />
        <meshBasicMaterial color="#050505" />
      </mesh>

      {/* ── 4. Precision Aluminum L-Stand ── */}
      {/* Tilt Hinge Cylinder */}
      <mesh position={[0, 0.25, -0.22]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.11, 0.11, 0.32, 24]} />
        <meshStandardMaterial color="#CBD5E1" metalness={0.96} roughness={0.06} />
      </mesh>

      {/* Stand Neck Arm */}
      <group position={[0, -0.42, -0.18]} rotation={[0.12, 0, 0]}>
        <RoundedBox args={[0.32, 1.35, 0.12]} radius={0.03} smoothness={4} castShadow>
          <meshStandardMaterial color="#1E2638" metalness={0.92} roughness={0.18} />
        </RoundedBox>
        {/* Circular Cable Pass-Through Hole */}
        <mesh position={[0, -0.18, 0]}>
          <torusGeometry args={[0.09, 0.025, 16, 32]} />
          <meshStandardMaterial color="#64748B" metalness={0.96} roughness={0.08} />
        </mesh>
      </group>

      {/* Base Plate resting on desk */}
      <RoundedBox args={[1.9, 0.07, 1.25]} radius={0.04} smoothness={4} position={[0, -1.08, 0.08]} receiveShadow castShadow>
        <meshStandardMaterial color="#1E2638" metalness={0.92} roughness={0.18} />
      </RoundedBox>
    </group>
  );
}

/**
 * 3D Laptop (MacBook style, open at 115 degrees)
 * Displays "Featured Projects" portfolio gallery
 */
function Laptop3D({ laptopTex }) {
  return (
    <group position={[-1.25, -0.65, 1.25]} rotation={[0, 0.36, 0]}>
      {/* ── Laptop Base Plate (Bottom Half) ── */}
      <RoundedBox args={[1.85, 0.045, 1.25]} radius={0.03} smoothness={4} position={[0, 0, 0]} receiveShadow castShadow>
        <meshStandardMaterial color="#1A2234" metalness={0.90} roughness={0.20} />
      </RoundedBox>

      {/* Recessed Keyboard Bed */}
      <mesh position={[0, 0.026, -0.12]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.72, 0.70]} />
        <meshStandardMaterial color="#0F1626" roughness={0.5} />
      </mesh>

      {/* Keyboard Key Rows */}
      {[0, 1, 2, 3].map((r) => (
        <mesh key={r} position={[0, 0.033, -0.36 + r * 0.16]}>
          <boxGeometry args={[1.68, 0.015, 0.11]} />
          <meshStandardMaterial color="#2B364D" roughness={0.3} metalness={0.4} />
        </mesh>
      ))}

      {/* Large Glass Trackpad */}
      <mesh position={[0, 0.026, 0.38]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.65, 0.42]} />
        <meshStandardMaterial color="#253248" roughness={0.15} metalness={0.4} />
      </mesh>

      {/* ── Laptop Screen Lid (Tilted back at ~115 degrees) ── */}
      <group position={[0, 0.03, -0.62]} rotation={[-0.42, 0, 0]}>
        {/* Lid Enclosure */}
        <RoundedBox args={[1.85, 1.25, 0.035]} radius={0.03} smoothness={4} position={[0, 0.60, 0]} castShadow>
          <meshStandardMaterial color="#1A2234" metalness={0.90} roughness={0.20} />
        </RoundedBox>

        {/* Screen Display */}
        <mesh position={[0, 0.60, 0.02]}>
          <planeGeometry args={[1.75, 1.15]} />
          <meshStandardMaterial
            map={laptopTex}
            roughness={0.08}
            metalness={0.0}
            emissive="#122448"
            emissiveIntensity={0.25}
          />
        </mesh>
      </group>
    </group>
  );
}

/**
 * 3D Smartphone (Right Forefront)
 * Displays TechCrestaX mobile responsive site with "25+ Happy Clients"
 */
function Phone3D({ mobileTex }) {
  return (
    <group position={[1.85, -0.48, 1.3]} rotation={[0.06, -0.32, 0.03]}>
      {/* Smartphone Chassis */}
      <RoundedBox args={[0.82, 1.74, 0.075]} radius={0.12} smoothness={6} castShadow>
        <meshStandardMaterial color="#1A2234" metalness={0.92} roughness={0.12} envMapIntensity={2.0} />
      </RoundedBox>

      {/* Polished Stainless Steel Antenna Band */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.84, 1.76, 0.07]} />
        <meshStandardMaterial color="#64748B" metalness={0.98} roughness={0.06} />
      </mesh>

      {/* Screen Surface */}
      <mesh position={[0, 0, 0.04]}>
        <planeGeometry args={[0.74, 1.64]} />
        <meshStandardMaterial
          map={mobileTex}
          roughness={0.05}
          emissive="#0A1835"
          emissiveIntensity={0.22}
        />
      </mesh>

      {/* Dynamic Island Pill */}
      <mesh position={[0, 0.70, 0.043]}>
        <capsuleGeometry args={[0.026, 0.10, 4, 12]} rotation={[0, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#000000" roughness={0.2} />
      </mesh>

      {/* Phone Stand Wedge underneath */}
      <mesh position={[0, -0.80, -0.1]} rotation={[-0.3, 0, 0]}>
        <boxGeometry args={[0.45, 0.12, 0.25]} />
        <meshStandardMaterial color="#0F172A" metalness={0.8} roughness={0.3} />
      </mesh>
    </group>
  );
}

/**
 * Desk Surface & Desktop Accessories:
 * - Slate/Obsidian Desk Plane
 * - Glowing Neon Orange LED Edge Strip
 * - Keyboard & Mouse
 */
function DeskEnvironment() {
  return (
    <group position={[0.1, -1.14, 0.6]}>
      {/* Desk Surface Slab */}
      <RoundedBox args={[8.8, 0.14, 3.8]} radius={0.04} smoothness={4} receiveShadow>
        <meshStandardMaterial color="#0C1322" metalness={0.4} roughness={0.6} />
      </RoundedBox>

      {/* ── Glowing Neon Orange LED Strip along the front edge of the desk ── */}
      <mesh position={[0, -0.04, 1.91]}>
        <boxGeometry args={[8.6, 0.035, 0.015]} />
        <meshBasicMaterial color="#FF6B4A" />
      </mesh>
      {/* Orange Glow Bar Light Source */}
      <pointLight position={[0, -0.05, 2.0]} intensity={2.5} color="#FF6B4A" distance={4} decay={2} />

      {/* Desk Keyboard in front of the monitor */}
      <group position={[0.4, 0.09, 0.55]} rotation={[0.04, -0.16, 0]}>
        <RoundedBox args={[1.8, 0.035, 0.75]} radius={0.02} smoothness={3}>
          <meshStandardMaterial color="#1E2638" metalness={0.88} roughness={0.2} />
        </RoundedBox>
        {/* Keys */}
        {[0, 1, 2, 3].map((r) => (
          <mesh key={r} position={[0, 0.022, -0.22 + r * 0.14]}>
            <boxGeometry args={[1.72, 0.012, 0.09]} />
            <meshStandardMaterial color="#2B364D" roughness={0.3} metalness={0.4} />
          </mesh>
        ))}
      </group>

      {/* Precision Wireless Mouse */}
      <group position={[1.65, 0.10, 0.65]} rotation={[0.04, -0.16, 0]}>
        <RoundedBox args={[0.32, 0.05, 0.55]} radius={0.06} smoothness={5}>
          <meshStandardMaterial color="#1E2638" metalness={0.9} roughness={0.15} />
        </RoundedBox>
      </group>
    </group>
  );
}

/** Floating Code Editor Window (Top Left) */
function FloatingCodeWindow({ codeTex }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.position.y = 0.95 + Math.sin(t * 0.45 + 1.2) * 0.05;
      ref.current.rotation.y = 0.24 + Math.sin(t * 0.2) * 0.03;
    }
  });

  return (
    <group ref={ref} position={[-1.75, 0.95, 0.5]} rotation={[-0.04, 0.24, -0.02]}>
      <RoundedBox args={[1.85, 1.30, 0.05]} radius={0.07} smoothness={4} castShadow>
        <meshStandardMaterial color="#111422" metalness={0.6} roughness={0.3} />
      </RoundedBox>
      <mesh position={[0, 0, 0.028]}>
        <planeGeometry args={[1.78, 1.24]} />
        <meshStandardMaterial map={codeTex} roughness={0.1} emissive="#0D1120" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

/** General Floating Pill Badge Component */
function FloatingPillBadge({ texture, position, rotation = [0, 0, 0], floatOffset = 0, size = [1.2, 0.38] }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime + floatOffset;
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(t * 0.6) * 0.04;
      ref.current.rotation.z = rotation[2] + Math.sin(t * 0.4) * 0.015;
    }
  });

  return (
    <group ref={ref} position={position} rotation={rotation}>
      <RoundedBox args={[size[0], size[1], 0.035]} radius={size[1] / 2} smoothness={6} castShadow>
        <meshStandardMaterial color="#0A1122" metalness={0.4} roughness={0.2} />
      </RoundedBox>
      <mesh position={[0, 0, 0.02]}>
        <planeGeometry args={[size[0] * 0.96, size[1] * 0.94]} />
        <meshStandardMaterial map={texture} roughness={0.1} transparent emissive="#FF6B4A" emissiveIntensity={0.15} />
      </mesh>
    </group>
  );
}

/** Floating Amber Diamond Crystal */
function FloatingCrystal({ position, color = '#FFB627', speed = 1 }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    if (!ref.current) return;
    ref.current.rotation.y = t * 0.6;
    ref.current.rotation.x = t * 0.4;
    ref.current.position.y = position[1] + Math.sin(t * 0.7) * 0.08;
  });

  return (
    <mesh ref={ref} position={position} castShadow>
      <octahedronGeometry args={[0.13, 0]} />
      <meshStandardMaterial
        color={color}
        metalness={0.95}
        roughness={0.06}
        emissive={color}
        emissiveIntensity={0.6}
        envMapIntensity={2.5}
      />
    </mesh>
  );
}

/** 3D Curved Light Tendril (orange luminous energy line) */
function EnergyTendril({ points, color = '#FF6B4A' }) {
  const curve = useMemo(() => {
    const vPoints = points.map((p) => new THREE.Vector3(...p));
    return new THREE.CatmullRomCurve3(vPoints);
  }, [points]);

  return (
    <mesh>
      <tubeGeometry args={[curve, 48, 0.012, 8, false]} />
      <meshBasicMaterial color={color} transparent opacity={0.65} />
    </mesh>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WORKSTATION RIG (RESPONSIVE AUTO-FIT)
═══════════════════════════════════════════════════════════════ */

function WorkstationRig({ mouseRef, textures }) {
  const { viewport } = useThree();

  // Auto-fit scale so the entire composition is fully visible with generous margins
  const responsiveScale = useMemo(() => {
    // Total composition width ~ 5.4, height ~ 3.3
    const scaleX = (viewport.width * 0.88) / 5.4;
    const scaleY = (viewport.height * 0.86) / 3.3;
    return Math.max(0.50, Math.min(Math.min(scaleX, scaleY), 0.80));
  }, [viewport.width, viewport.height]);

  return (
    <group position={[0.1, -0.05, 0]} scale={responsiveScale}>
      {/* Contact Shadows on the desk */}
      <ContactShadows position={[0, -1.16, 0.6]} opacity={0.8} scale={15} blur={2.2} far={3.6} color="#01040A" />

      {/* ── 1. Desk Environment & Neon Edge ── */}
      <DeskEnvironment />

      {/* ── 2. Primary 3D Monitor ── */}
      <RealDesktopMonitor monitorTex={textures.monitorTex} mouseRef={mouseRef} />

      {/* ── 3. 3D Laptop with Featured Projects ── */}
      <Float speed={0.8} rotationIntensity={0.03} floatIntensity={0.12} floatingRange={[-0.02, 0.02]}>
        <Laptop3D laptopTex={textures.laptopTex} />
      </Float>

      {/* ── 4. 3D Mobile Device ── */}
      <Float speed={1.1} rotationIntensity={0.04} floatIntensity={0.15} floatingRange={[-0.03, 0.03]}>
        <Phone3D mobileTex={textures.mobileTex} />
      </Float>

      {/* ── 5. Floating Code Window (Top Left) ── */}
      <FloatingCodeWindow codeTex={textures.codeTex} />

      {/* ── 6. Floating UI/UX Badges (Exactly matching the reference image!) ── */}
      {/* Badge: </> Web Development (Above laptop) */}
      <FloatingPillBadge
        texture={textures.webDevBadge}
        position={[-1.25, 0.15, 1.6]}
        rotation={[0.02, 0.28, 0]}
        floatOffset={0.4}
        size={[1.25, 0.38]}
      />

      {/* Badge: Business Growth +200% ↗ (Center-Right in front of monitor) */}
      <FloatingPillBadge
        texture={textures.growthBadge}
        position={[0.92, -0.12, 1.25]}
        rotation={[0.02, -0.18, 0]}
        floatOffset={1.2}
        size={[1.35, 0.44]}
      />

      {/* Badge: UI/UX Design → (Top Right above phone) */}
      <FloatingPillBadge
        texture={textures.uiuxBadge}
        position={[1.85, 1.05, 0.8]}
        rotation={[-0.02, -0.25, 0]}
        floatOffset={0.8}
        size={[1.25, 0.38]}
      />

      {/* Badge: E-commerce & Portals → (Right of phone) */}
      <FloatingPillBadge
        texture={textures.ecomBadge}
        position={[2.08, 0.08, 1.35]}
        rotation={[0.04, -0.28, 0]}
        floatOffset={1.5}
        size={[1.40, 0.40]}
      />

      {/* Badge: SEO & Growth → (Bottom right in front of phone) */}
      <FloatingPillBadge
        texture={textures.seoBadge}
        position={[1.65, -0.80, 1.65]}
        rotation={[0.05, -0.22, 0]}
        floatOffset={2.0}
        size={[1.30, 0.38]}
      />

      {/* ── 7. Floating Crystals & Light Tendrils ── */}
      <FloatingCrystal position={[-2.4, 1.3, -0.3]} color="#FF982A" speed={0.9} />
      <FloatingCrystal position={[2.5, -0.5, 0.2]} color="#FFB627" speed={1.1} />
      <FloatingCrystal position={[0.4, 1.9, -0.6]} color="#FF6B4A" speed={0.8} />
      <FloatingCrystal position={[-2.3, -0.6, 1.2]} color="#FFB627" speed={1.2} />

      {/* Energy tendrils looping gracefully around the devices */}
      <EnergyTendril
        points={[
          [-1.8, 0.8, 0.4],
          [-1.5, 0.2, 1.4],
          [-0.8, -0.4, 1.8],
          [0.2, -0.7, 1.7],
          [1.4, -0.3, 1.5],
          [1.9, 0.6, 1.0],
        ]}
      />
    </group>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCENE COMPOSER WITH CINEMATIC LIGHTING
═══════════════════════════════════════════════════════════════ */

function Scene({ mouseRef }) {
  // Generate all retina textures matching the reference
  const textures = useMemo(() => {
    return {
      monitorTex:   makeMonitorTexture(),
      laptopTex:    makeLaptopTexture(),
      mobileTex:    makeMobileTexture(),
      codeTex:      makeCodeTexture(),
      webDevBadge:  makePillTexture({ icon: '⚡', title: 'Web Development', accent: '#FF6B4A' }),
      growthBadge:  makePillTexture({ icon: '📈', title: 'Business Growth', subtitle: '+200% ↗', accent: '#FFB627' }),
      uiuxBadge:    makePillTexture({ icon: '✏️', title: 'UI/UX Design →', accent: '#FF6B4A' }),
      ecomBadge:    makePillTexture({ icon: '🛒', title: 'E-commerce & Portals →', accent: '#FF982A' }),
      seoBadge:     makePillTexture({ icon: '📊', title: 'SEO & Growth →', accent: '#FF6B4A' }),
    };
  }, []);

  return (
    <>
      {/* ── CINEMATIC LIGHTING (WARM ORANGE ACCENTS) ── */}
      <ambientLight intensity={0.55} />

      {/* Atmospheric hemisphere light for natural specular sheen without external network downloads */}
      <hemisphereLight skyColor="#93C5FD" groundColor="#0F172A" intensity={0.65} />

      {/* Key Studio Light */}
      <directionalLight
        position={[-4, 7, 6]}
        intensity={2.6}
        color="#E2EEFF"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={0.1}
        shadow-camera-far={25}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
        shadow-bias={-0.0005}
      />

      {/* Warm Fill Light (Orange brand bounce) */}
      <directionalLight position={[6, 3, 4]} intensity={1.5} color="#FFD1B3" />

      {/* Top Rim Light (Specularity on aluminum chassis) */}
      <directionalLight position={[0, 6, -4]} intensity={1.8} color="#94A3B8" />

      {/* Warm Orange Desk Underglow Lights */}
      <pointLight position={[0, -0.6, 1.2]} intensity={4.5} color="#FF6B4A" distance={5} decay={2} />
      <pointLight position={[-1.2, -0.6, 1.5]} intensity={2.5} color="#FF982A" distance={4} decay={2} />
      <pointLight position={[1.8, -0.5, 1.4]} intensity={2.5} color="#FF6B4A" distance={4} decay={2} />

      {/* Monitor Display Projection Light */}
      <pointLight position={[0.2, 0.45, 1.6]} intensity={3.0} color="#2563EB" distance={5} decay={2} />

      {/* Metallic specular booster */}
      <pointLight position={[0, 4, 3]} intensity={1.2} color="#FFFFFF" distance={10} decay={2} />

      {/* Auto-fitting Workstation Rig */}
      <WorkstationRig mouseRef={mouseRef} textures={textures} />

      {/* Orbit Controls centered on workstation */}
      <OrbitControls
        target={[0, 0.15, 0]}
        enableZoom={false}
        enablePan={false}
        dampingFactor={0.05}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 2.6}
        minAzimuthAngle={-0.45}
        maxAzimuthAngle={0.35}
      />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXPORTED CANVAS COMPONENT
═══════════════════════════════════════════════════════════════ */

export default function HeroScene() {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0.35, 7.6], fov: 38 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      dpr={[1, Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 1.8)]}
      shadows="soft"
      style={{
        width: '100%',
        height: '100%',
        background: 'transparent',
        cursor: 'grab',
        touchAction: 'none',
      }}
    >
      <Scene mouseRef={mouseRef} />
    </Canvas>
  );
}
