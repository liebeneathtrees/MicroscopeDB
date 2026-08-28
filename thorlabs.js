// ════════════════════════════════════════════════════
// THORLABS
// ════════════════════════════════════════════════════
DB.companies.push({id:"thorlabs",name:"Thorlabs",shortName:"Thorlabs",flag:"🇺🇸",country:"USA",
 founded:1989,status:"active",featured:false,hq:"Newton, New Jersey, USA",
 categories:["compound"],
 overview:"Thorlabs was founded in 1989 in Newton, New Jersey by Alex Cable as a supplier of optomechanics, fiber optic components, and photonics hardware to academic research labs. The company’s entry into complete microscope systems came with the Cerna modular research microscope platform (introduced c. 2010), designed explicitly as an open-architecture system that researchers can assemble, modify, and integrate with custom hardware — a direct response to the closed, proprietary architecture of conventional research microscopes. The Bergamo II multiphoton two-photon scanning system (2014) followed, targeting in-vivo neuroscience and calcium imaging. What distinguishes Thorlabs from all other microscope manufacturers: they design and manufacture virtually every component themselves — optics, optomechanics, electronics, and software — rather than sourcing from OEM suppliers. This vertical integration provides complete component traceability and enables researchers to purchase individual parts for integration into custom systems, which is essentially impossible with any other major manufacturer. ThorImage LS software is designed for ScanImage compatibility (the widely-used open-source two-photon acquisition standard). Thorlabs is privately held and headquartered in Newton, NJ, with manufacturing facilities in the USA, Germany, and the UK.",
 oem:{acquiredBy:null,acquired:[],makesFor:[],madeBy:[],notes:"Thorlabs acquired Prior Scientific's photonics division for motion control components."},
 models:[
  {id:"thorlabs-cerna",name:"Cerna Research Microscope",series:"Cerna",type:"compound",subtype:"modular open-architecture",
   introduced:2014,discontinued:false,price_tier:"premium",
   price_new:"$8,000–$28,000",price_used:"$2,000–$9,000",
   illumination:["LED","Laser (custom)","LED Array"],magnification:"20x–1000x",
   objectives:"Accepts all major objective thread standards (RMS, M25, M32)",eyepieces:"10x/22mm",
   stage:"Motorized (MMBP / Prior MS2000)",fluorescence:true,phase_contrast:true,darkfield:false,dic:true,
   motorized:true,inverted:false,camera_port:true,software:"Micro-Manager / Custom",
   applications:["Custom imaging rigs","Electrophysiology","Optogenetics","Light sheet (DIY)","Prototype development"],
   noteworthy:"Open-architecture modular system built on cage system. Designed for researchers who need full hardware control. Popular for optogenetics patch-clamp rigs and custom widefield designs unavailable from standard vendors.",
   oem_source:null}
,

  {id:"thorlabs-bergamo",name:"Bergamo II Multiphoton",series:"Bergamo",type:"compound",subtype:"multiphoton / two-photon laser scanning (research)",
   introduced:2014,discontinued:false,price_tier:"ultra",
   price_new:"$200,000+",price_used:null,
   illumination:["Femtosecond pulsed laser (Ti:Sapphire or fiber, user-supplied)","Non-descanned detection","Multiple PMT detector channels (2–4 simultaneous)"],
   magnification:"Variable by objective; designed for 10x–25x low-NA large FOV; up to 60x high-NA",
   objectives:"Olympus or Nikon objectives compatible; M25 thread standard on most configurations",
   eyepieces:"Not applicable — laser-scanning system",
   stage:"Motorized XY; piezoelectric Z; large travel for in-vivo imaging",
   fluorescence:true,phase_contrast:false,darkfield:false,dic:false,
   motorized:true,inverted:false,camera_port:false,software:"ThorImage LS (included); ScanImage compatible",
   applications:["In-vivo neuroscience","Brain imaging","Calcium imaging","Two-photon uncaging","Deep tissue imaging","In-vivo vasculature"],
   noteworthy:"Thorlabs’ open-access two-photon / multiphoton laser scanning microscope designed primarily for in-vivo neuroscience. Unlike the Cerna (a modular conventional scope), the Bergamo is an upright scanning system with a large resonant/galvo scan head. All optical components are Thorlabs-manufactured for maximum traceability and repairability. A more affordable and customizable alternative to Bruker Ultima and similar systems. Particularly popular with labs doing chronic in-vivo calcium imaging with GCaMP reporters.",
   oem_source:null}]});
