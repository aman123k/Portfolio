import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeDCharacterProps {
  pose: "hero" | "about" | "contact";
}

export const ThreeDCharacter: React.FC<ThreeDCharacterProps> = ({ pose }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- 1. Scene Setup ---
    const width = containerRef.current.clientWidth || 400;
    const height = containerRef.current.clientHeight || 450;

    const scene = new THREE.Scene();

    // Transparent background so it fits any page bg
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);

    // --- 2. Lighting Setup ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Key Light (Warm Orange Sun)
    const keyLight = new THREE.DirectionalLight(0xfff3e0, 2.5);
    keyLight.position.set(5, 8, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 25;
    keyLight.shadow.camera.left = -3;
    keyLight.shadow.camera.right = 3;
    keyLight.shadow.camera.top = 3;
    keyLight.shadow.camera.bottom = -3;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // Fill Light (Cool Blue-ish)
    const fillLight = new THREE.DirectionalLight(0xe0f2fe, 1.2);
    fillLight.position.set(-5, 3, 2);
    scene.add(fillLight);

    // Bounce Light (From below)
    const bounceLight = new THREE.DirectionalLight(0xfff7ed, 0.8);
    bounceLight.position.set(0, -5, 2);
    scene.add(bounceLight);

    // --- 3. Materials System ---
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xffd8be,
      roughness: 0.6,
      metalness: 0.1,
    });

    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x242b35,
      roughness: 0.8,
      metalness: 0.1,
    });

    const orangeMat = new THREE.MeshStandardMaterial({
      color: 0xff7a00,
      roughness: 0.7,
      metalness: 0.05,
    });

    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.5,
      metalness: 0.1,
    });

    const metalMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.3,
      metalness: 0.8,
    });

    const screenMat = new THREE.MeshBasicMaterial({
      color: 0xffedd5, // warm orange screen glow
    });

    const glassFrameMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.1,
      metalness: 0.9,
    });

    // --- 4. Building the Character Model ---
    const charGroup = new THREE.Group();
    scene.add(charGroup);

    // HEAD
    const headGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const head = new THREE.Mesh(headGeo, skinMat);
    head.position.y = 1.0;
    head.castShadow = true;
    head.receiveShadow = true;
    charGroup.add(head);

    // EARS
    const earGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const leftEar = new THREE.Mesh(earGeo, skinMat);
    leftEar.position.set(-0.72, 1.0, 0);
    const rightEar = leftEar.clone();
    rightEar.position.set(0.72, 1.0, 0);
    charGroup.add(leftEar);
    charGroup.add(rightEar);

    // HAIR (Clay/Stylized spheres)
    const hairGroup = new THREE.Group();
    const mainHairGeo = new THREE.SphereGeometry(0.72, 24, 24);
    const mainHair = new THREE.Mesh(mainHairGeo, hairMat);
    mainHair.position.set(0, 0.1, -0.05);
    mainHair.scale.set(1.02, 1.0, 1.08);
    hairGroup.add(mainHair);

    // Hair Tuft Front
    const tuftGeo1 = new THREE.SphereGeometry(0.25, 16, 16);
    const tuft1 = new THREE.Mesh(tuftGeo1, hairMat);
    tuft1.position.set(-0.3, 0.5, 0.45);
    hairGroup.add(tuft1);

    const tuftGeo2 = new THREE.SphereGeometry(0.3, 16, 16);
    const tuft2 = new THREE.Mesh(tuftGeo2, hairMat);
    tuft2.position.set(0.1, 0.55, 0.48);
    hairGroup.add(tuft2);

    const tuft3 = new THREE.Mesh(tuftGeo1, hairMat);
    tuft3.position.set(0.4, 0.45, 0.4);
    hairGroup.add(tuft3);

    head.add(hairGroup);

    // GLASSES
    const glassesGroup = new THREE.Group();
    const frameGeo = new THREE.TorusGeometry(0.18, 0.03, 8, 24);
    const leftFrame = new THREE.Mesh(frameGeo, glassFrameMat);
    leftFrame.position.set(-0.25, 0.02, 0.65);
    const rightFrame = leftFrame.clone();
    rightFrame.position.set(0.25, 0.02, 0.65);
    glassesGroup.add(leftFrame);
    glassesGroup.add(rightFrame);

    // Bridge of glasses
    const bridgeGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.15, 8);
    const bridge = new THREE.Mesh(bridgeGeo, glassFrameMat);
    bridge.rotation.z = Math.PI / 2;
    bridge.position.set(0, 0.05, 0.65);
    glassesGroup.add(bridge);

    // Wings of glasses
    const wingGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.5, 8);
    const leftWing = new THREE.Mesh(wingGeo, glassFrameMat);
    leftWing.rotation.x = Math.PI / 2;
    leftWing.position.set(-0.43, 0.05, 0.42);
    const rightWing = leftWing.clone();
    rightWing.position.set(0.43, 0.05, 0.42);
    glassesGroup.add(leftWing);
    glassesGroup.add(rightWing);

    head.add(glassesGroup);

    // EYES
    const eyeGeo = new THREE.SphereGeometry(0.05, 16, 16);
    const leftEye = new THREE.Mesh(eyeGeo, darkMat);
    leftEye.position.set(-0.25, 0.03, 0.62);
    const rightEye = leftEye.clone();
    rightEye.position.set(0.25, 0.03, 0.62);
    head.add(leftEye);
    head.add(rightEye);

    // NOSE
    const noseGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const nose = new THREE.Mesh(noseGeo, skinMat);
    nose.position.set(0, -0.08, 0.67);
    head.add(nose);

    // MOUTH (Happy smile line)
    const mouthGeo = new THREE.TorusGeometry(0.08, 0.02, 8, 16, Math.PI);
    const mouth = new THREE.Mesh(
      mouthGeo,
      new THREE.MeshBasicMaterial({ color: 0x993333 }),
    );
    mouth.rotation.x = Math.PI;
    mouth.rotation.z = Math.PI;
    mouth.position.set(0, -0.22, 0.64);
    head.add(mouth);

    // BODY (Hoodie Torso)
    const torsoGeo = new THREE.CylinderGeometry(0.5, 0.7, 1.4, 24);
    const torso = new THREE.Mesh(torsoGeo, orangeMat);
    torso.position.y = -0.1;
    torso.castShadow = true;
    torso.receiveShadow = true;
    charGroup.add(torso);

    // HOOD COLLAR (Capsule back shape)
    const hoodGeo = new THREE.SphereGeometry(0.78, 24, 24);
    const hood = new THREE.Mesh(hoodGeo, orangeMat);
    hood.position.set(0, 0.8, -0.15);
    hood.scale.set(1.05, 1.0, 1.1);
    charGroup.add(hood);

    // Hoodie Strings
    const stringGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.4, 8);
    const leftString = new THREE.Mesh(stringGeo, darkMat);
    leftString.position.set(-0.15, 0.4, 0.5);
    const rightString = leftString.clone();
    rightString.position.set(0.15, 0.4, 0.5);
    charGroup.add(leftString);
    charGroup.add(rightString);

    // POSE SPECIFIC ITEMS AND ARMS
    const leftArmGroup = new THREE.Group();
    const rightArmGroup = new THREE.Group();

    if (pose === "hero") {
      // --- HERO POSE: Sitting/Holding Laptop ---

      // Left Arm
      const armGeoL = new THREE.CylinderGeometry(0.15, 0.12, 0.8, 16);
      const armL = new THREE.Mesh(armGeoL, orangeMat);
      armL.position.y = -0.3;
      leftArmGroup.add(armL);
      leftArmGroup.position.set(-0.7, 0.4, 0.1);
      leftArmGroup.rotation.z = Math.PI / 4;
      leftArmGroup.rotation.x = -Math.PI / 6;

      // Hand Left
      const handGeo = new THREE.SphereGeometry(0.1, 16, 16);
      const handL = new THREE.Mesh(handGeo, skinMat);
      handL.position.y = -0.45;
      leftArmGroup.add(handL);

      // Right Arm
      const armR = new THREE.Mesh(armGeoL, orangeMat);
      armR.position.y = -0.3;
      rightArmGroup.add(armR);
      rightArmGroup.position.set(0.7, 0.4, 0.1);
      rightArmGroup.rotation.z = -Math.PI / 4;
      rightArmGroup.rotation.x = -Math.PI / 6;

      // Hand Right
      const handR = new THREE.Mesh(handGeo, skinMat);
      handR.position.y = -0.45;
      rightArmGroup.add(handR);

      charGroup.add(leftArmGroup);
      charGroup.add(rightArmGroup);

      // LAPTOP
      const laptopGroup = new THREE.Group();
      laptopGroup.position.set(0, -0.15, 0.8);
      laptopGroup.rotation.x = -0.1;

      // Base
      const baseGeo = new THREE.BoxGeometry(1.2, 0.05, 0.8);
      const base = new THREE.Mesh(baseGeo, metalMat);
      base.castShadow = true;
      laptopGroup.add(base);

      // Screen
      const screenBackGeo = new THREE.BoxGeometry(1.2, 0.8, 0.04);
      const screenBack = new THREE.Mesh(screenBackGeo, metalMat);
      screenBack.position.set(0, 0.38, -0.38);
      screenBack.rotation.x = -0.4; // Tilt back
      screenBack.castShadow = true;
      laptopGroup.add(screenBack);

      // Screen Face Glow
      const screenGlowGeo = new THREE.PlaneGeometry(1.1, 0.7);
      const screenGlow = new THREE.Mesh(screenGlowGeo, screenMat);
      screenGlow.position.set(0, 0.38, -0.35);
      screenGlow.rotation.x = -0.4;
      laptopGroup.add(screenGlow);

      // Light glow onto character
      const laptopLight = new THREE.PointLight(0xffab40, 1.8, 3);
      laptopLight.position.set(0, 0.4, 0.4);
      laptopGroup.add(laptopLight);

      charGroup.add(laptopGroup);

      // Floating Badges in Three.js
      const badgeGroup = new THREE.Group();
      scene.add(badgeGroup);

      // React Badge
      const reactBadgeGeo = new THREE.TorusGeometry(0.2, 0.015, 8, 16);
      const reactBadge = new THREE.Mesh(
        reactBadgeGeo,
        new THREE.MeshStandardMaterial({
          color: 0x61dafb,
          emissive: 0x00d2ff,
          emissiveIntensity: 0.5,
        }),
      );
      reactBadge.position.set(1.5, 1.2, 0.5);
      badgeGroup.add(reactBadge);

      // JS Badge
      const jsBadgeGeo = new THREE.BoxGeometry(0.3, 0.3, 0.05);
      const jsBadge = new THREE.Mesh(
        jsBadgeGeo,
        new THREE.MeshStandardMaterial({ color: 0xf7df1e, roughness: 0.1 }),
      );
      jsBadge.position.set(-1.4, 1.0, 0.8);
      jsBadge.rotation.set(0.2, 0.5, 0.1);
      badgeGroup.add(jsBadge);

      // Python Badge
      const pyBadgeGeo = new THREE.SphereGeometry(0.18, 16, 16);
      const pyBadge = new THREE.Mesh(
        pyBadgeGeo,
        new THREE.MeshStandardMaterial({ color: 0x3776ab, roughness: 0.2 }),
      );
      pyBadge.position.set(1.3, -0.5, 0.6);
      badgeGroup.add(pyBadge);

      // Animate floating badges in render loop
      let t = 0;
      const animateHeroBadges = () => {
        t += 0.02;
        reactBadge.position.y = 1.2 + Math.sin(t * 1.5) * 0.1;
        reactBadge.rotation.y += 0.01;
        reactBadge.rotation.x += 0.005;

        jsBadge.position.y = 1.0 + Math.cos(t * 1.2) * 0.08;
        jsBadge.rotation.y += 0.008;

        pyBadge.position.y = -0.5 + Math.sin(t * 0.9) * 0.12;
      };

      (scene as any).customAnimate = animateHeroBadges;
    } else if (pose === "about") {
      // --- ABOUT POSE: Standing, holding tablet, toolbelt ---

      // Legs
      const legGeo = new THREE.CylinderGeometry(0.14, 0.14, 1.0, 16);
      const leftLeg = new THREE.Mesh(legGeo, darkMat);
      leftLeg.position.set(-0.25, -1.2, 0);
      leftLeg.castShadow = true;
      const rightLeg = leftLeg.clone();
      rightLeg.position.set(0.25, -1.2, 0);
      charGroup.add(leftLeg);
      charGroup.add(rightLeg);

      // Shoes
      const shoeGeo = new THREE.BoxGeometry(0.22, 0.15, 0.35);
      const leftShoe = new THREE.Mesh(shoeGeo, darkMat);
      leftShoe.position.set(-0.25, -1.7, 0.08);
      const rightShoe = leftShoe.clone();
      rightShoe.position.set(0.25, -1.7, 0.08);
      charGroup.add(leftShoe);
      charGroup.add(rightShoe);

      // Tool Belt (brown loop around waist)
      const beltGeo = new THREE.TorusGeometry(0.58, 0.06, 8, 24);
      const beltMat = new THREE.MeshStandardMaterial({
        color: 0x5c4033,
        roughness: 0.9,
      });
      const belt = new THREE.Mesh(beltGeo, beltMat);
      belt.rotation.x = Math.PI / 2;
      belt.position.y = -0.68;
      charGroup.add(belt);

      // Arms holding tablet
      const armGeoL = new THREE.CylinderGeometry(0.14, 0.11, 0.7, 16);
      const armL = new THREE.Mesh(armGeoL, orangeMat);
      armL.position.y = -0.25;
      leftArmGroup.add(armL);
      leftArmGroup.position.set(-0.65, 0.4, 0.2);
      leftArmGroup.rotation.z = Math.PI / 3;
      leftArmGroup.rotation.x = -Math.PI / 6;

      const handGeo = new THREE.SphereGeometry(0.09, 16, 16);
      const handL = new THREE.Mesh(handGeo, skinMat);
      handL.position.y = -0.38;
      leftArmGroup.add(handL);

      const armR = new THREE.Mesh(armGeoL, orangeMat);
      armR.position.y = -0.25;
      rightArmGroup.add(armR);
      rightArmGroup.position.set(0.65, 0.4, 0.2);
      rightArmGroup.rotation.z = -Math.PI / 3;
      rightArmGroup.rotation.x = -Math.PI / 6;

      const handR = new THREE.Mesh(handGeo, skinMat);
      handR.position.y = -0.38;
      rightArmGroup.add(handR);

      charGroup.add(leftArmGroup);
      charGroup.add(rightArmGroup);

      // TABLET
      const tablet = new THREE.Group();
      tablet.position.set(0, 0.05, 0.7);
      tablet.rotation.x = -0.3;

      const tabBaseGeo = new THREE.BoxGeometry(0.9, 0.6, 0.04);
      const tabBase = new THREE.Mesh(tabBaseGeo, metalMat);
      tabBase.castShadow = true;
      tablet.add(tabBase);

      const tabGlowGeo = new THREE.PlaneGeometry(0.82, 0.52);
      const tabGlow = new THREE.Mesh(tabGlowGeo, screenMat);
      tabGlow.position.z = 0.022;
      tablet.add(tabGlow);

      charGroup.add(tablet);

      // Floating Background Star (Torus/Cylinder primitive combo)
      const starGroup = new THREE.Group();
      starGroup.position.set(0, 0.5, -1.8);
      scene.add(starGroup);

      const starMaterial = new THREE.MeshStandardMaterial({
        color: 0xffd1a4,
        emissive: 0xff7a00,
        emissiveIntensity: 0.15,
        roughness: 0.5,
      });

      // Star shape using cylinders for points
      for (let i = 0; i < 5; i++) {
        const cylinderGeo = new THREE.CylinderGeometry(0.0, 0.35, 1.4, 4);
        const point = new THREE.Mesh(cylinderGeo, starMaterial);
        const angle = (i * 2 * Math.PI) / 5;
        point.position.set(Math.sin(angle) * 0.7, Math.cos(angle) * 0.7, 0);
        point.rotation.z = -angle;
        starGroup.add(point);
      }

      let t = 0;
      const animateAboutStar = () => {
        t += 0.015;
        starGroup.rotation.z = t * 0.2;
        starGroup.position.y = 0.5 + Math.sin(t) * 0.1;
      };
      (scene as any).customAnimate = animateAboutStar;
    } else if (pose === "contact") {
      // --- CONTACT POSE: Talking on phone ---

      // Left Arm resting at side
      const armGeoL = new THREE.CylinderGeometry(0.14, 0.11, 0.8, 16);
      const armL = new THREE.Mesh(armGeoL, orangeMat);
      armL.position.y = -0.35;
      leftArmGroup.add(armL);
      leftArmGroup.position.set(-0.68, 0.4, 0);
      leftArmGroup.rotation.z = Math.PI / 12;

      const handGeo = new THREE.SphereGeometry(0.09, 16, 16);
      const handL = new THREE.Mesh(handGeo, skinMat);
      handL.position.y = -0.78;
      leftArmGroup.add(handL);
      charGroup.add(leftArmGroup);

      // Right Arm raised, holding phone to ear
      const armR1 = new THREE.Mesh(armGeoL, orangeMat);
      armR1.position.y = -0.3;
      rightArmGroup.add(armR1);
      rightArmGroup.position.set(0.68, 0.4, 0);

      // Upper arm rotation
      rightArmGroup.rotation.z = -Math.PI / 4;
      rightArmGroup.rotation.x = -Math.PI / 3;

      // Forearm raised to ear
      const forearmGeo = new THREE.CylinderGeometry(0.12, 0.1, 0.6, 16);
      const forearm = new THREE.Mesh(forearmGeo, orangeMat);
      forearm.position.set(-0.15, 0.4, 0.3);
      forearm.rotation.z = Math.PI / 3;
      rightArmGroup.add(forearm);

      // Hand Right near ear
      const handR = new THREE.Mesh(handGeo, skinMat);
      handR.position.set(-0.4, 0.65, 0.42);
      rightArmGroup.add(handR);

      // PHONE
      const phoneGeo = new THREE.BoxGeometry(0.1, 0.28, 0.15);
      const phone = new THREE.Mesh(phoneGeo, darkMat);
      phone.position.set(-0.42, 0.72, 0.52);
      phone.rotation.y = Math.PI / 6;
      rightArmGroup.add(phone);

      charGroup.add(rightArmGroup);

      // Floating Mail Envelope
      const envelopeGroup = new THREE.Group();
      envelopeGroup.position.set(1.4, 1.2, 0.8);
      scene.add(envelopeGroup);

      // Envelope body
      const envBodyGeo = new THREE.BoxGeometry(0.7, 0.46, 0.06);
      const envMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.2,
      });
      const envBody = new THREE.Mesh(envBodyGeo, envMat);
      envBody.castShadow = true;
      envelopeGroup.add(envBody);

      // Red notification badge
      const badgeGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const badgeMat = new THREE.MeshStandardMaterial({ color: 0xef4444 });
      const badge = new THREE.Mesh(badgeGeo, badgeMat);
      badge.position.set(0.3, 0.2, 0.05);
      envelopeGroup.add(badge);

      let t = 0;
      const animateContactMail = () => {
        t += 0.02;
        envelopeGroup.position.y = 1.2 + Math.sin(t * 1.5) * 0.15;
        envelopeGroup.rotation.y = Math.sin(t * 0.5) * 0.2;
      };
      (scene as any).customAnimate = animateContactMail;
    }

    // Shadow catcher floor plane
    const planeGeo = new THREE.PlaneGeometry(10, 10);
    const shadowPlaneMat = new THREE.ShadowMaterial({ opacity: 0.08 });
    const shadowPlane = new THREE.Mesh(planeGeo, shadowPlaneMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.8;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // --- 5. Render & Animation Loop ---
    let animationFrameId: number;
    let time = 0;

    // Track mouse coordinates for interactive look-at parallax
    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      // Normalize mouse coordinates relative to container center
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      targetMouse.x = (clientX / rect.width) * 2 - 1;
      targetMouse.y = -(clientY / rect.height) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      time += 0.015;

      // Idle float animation
      charGroup.position.y = Math.sin(time) * 0.12;

      // Interpolate mouse movement for smooth delay parallax
      mouse.x += (targetMouse.x - mouse.x) * 0.08;
      mouse.y += (targetMouse.y - mouse.y) * 0.08;

      // Character rotates slightly to look at mouse pointer
      charGroup.rotation.y = mouse.x * 0.45;
      charGroup.rotation.x = -mouse.y * 0.2;

      // Run any pose-specific custom animations
      if ((scene as any).customAnimate) {
        (scene as any).customAnimate();
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // --- 6. Resize handler ---
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // --- 7. Cleanup ---
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      // Dispose resources to avoid WebGL leaks
      scene.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return;
        object.geometry.dispose();

        if (Array.isArray(object.material)) {
          object.material.forEach((mat) => mat.dispose());
        } else {
          object.material.dispose();
        }
      });
      renderer.dispose();
    };
  }, [pose]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        cursor: "grab",
      }}
    />
  );
};
