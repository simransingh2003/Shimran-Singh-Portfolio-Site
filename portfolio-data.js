/**
 * PORTFOLIO DATA MANAGEMENT SYSTEM
 * This file handles all portfolio data and language translations
 * Data is stored in localStorage and can be updated via admin panel
 */

// ==============================================
// LANGUAGE TRANSLATIONS
// ==============================================
const translations = {
    en: {
        // Navigation
        nav_about: "About",
        nav_impact: "Impact",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_achievements: "Achievements",
        nav_certificates: "Certificates",
        nav_contact: "Contact",
        
        // Hero Section
        hero_subtitle: "Where Security Meets Innovation",
        hero_role: "Cybersecurity Researcher • IT Security Specialist • Data Analyst",
        hero_description: "Building secure networks, automating vulnerability detection, and bridging the gap between security research and real-world implementation",
        hero_view_projects: "View Projects",
        hero_linkedin: "LinkedIn",
        hero_contact: "Contact Me",
        
        // About Section
        about_title: "About Me",
        about_para1: "I'm a BSc Information Technology graduate from Academic City University in Ghana (GPA: 3.3/4.0), passionate about cybersecurity, network security, and automation. My journey in tech has been driven by curiosity about how systems work—and more importantly, how they can be exploited and secured.",
        about_para2: "During my internship at Buck Press LTD, I gained hands-on experience testing Ghana's Passport Application Portal, identifying bugs, and working with system administration tasks. But my real passion emerged during my final year project: building VulnScout, an automated vulnerability scanning tool that detects HTTP request smuggling, information disclosure, and remote code execution vulnerabilities.",
        about_para3: "I believe cybersecurity isn't just about finding vulnerabilities—it's about understanding the human element, communicating risks clearly, and building systems that protect people. Whether I'm writing Nmap scripts, analyzing data in Tableau, or leading my Leo Club as Membership Chairperson, I approach every challenge with accountability, adaptability, and a commitment to continuous learning.",
        
        // Impact Metrics
        impact_title: "Impact Metrics",
        impact_scan_time: "% Scan Time Reduced",
        impact_false_positives: "% False Positives Reduced",
        impact_members: "+ Members Led",
        impact_projects: "Major Projects",
        
        // Experience Section
        experience_title: "Experience & Education",
        
        // Skills Section
        skills_title: "Skills & Expertise",
        skills_programming: "Programming Languages",
        skills_security: "Security Tools",
        skills_tools: "Tools & Platforms",
        skills_design: "Design Tools",
        skills_soft: "Soft Skills",
        skills_languages: "Languages",
        
        // Contact Section
        contact_title: "Let's Connect",
        contact_description: "Whether you're looking to collaborate on cybersecurity projects, discuss IT security, or explore opportunities—I'd love to hear from you!",
        contact_form_title: "Quick Message",
        contact_name: "Your Name",
        contact_email: "Your Email",
        contact_message: "Your Message",
        contact_send: "Send Message",
        
        // Footer
        footer_quote: "\"Security is not a product, but a process.\" - Bruce Schneier",
        footer_copyright: "© 2025 Shimran Singh. Built with passion for cybersecurity.",
        footer_university: "Academic City University | BSc Information Technology | Ghana"
    },
    hi: {
        // Navigation
        nav_about: "मेरे बारे में",
        nav_impact: "प्रभाव",
        nav_experience: "अनुभव",
        nav_projects: "परियोजनाएं",
        nav_skills: "कौशल",
        nav_achievements: "उपलब्धियां",
        nav_certificates: "प्रमाणपत्र",
        nav_contact: "संपर्क करें",
        
        // Hero Section
        hero_subtitle: "जहां सुरक्षा और नवाचार मिलते हैं",
        hero_role: "साइबर सुरक्षा शोधकर्ता • आईटी सुरक्षा विशेषज्ञ • डेटा विश्लेषक",
        hero_description: "सुरक्षित नेटवर्क बनाना, भेद्यता पहचान को स्वचालित करना, और सुरक्षा अनुसंधान और वास्तविक कार्यान्वयन के बीच की खाई को पाटना",
        hero_view_projects: "परियोजनाएं देखें",
        hero_linkedin: "लिंक्डइन",
        hero_contact: "मुझसे संपर्क करें",
        
        // About Section
        about_title: "मेरे बारे में",
        about_para1: "मैं घाना में एकेडमिक सिटी यूनिवर्सिटी से बीएससी सूचना प्रौद्योगिकी स्नातक हूं (जीपीए: 3.3/4.0), साइबर सुरक्षा, नेटवर्क सुरक्षा और स्वचालन के प्रति उत्साही हूं। तकनीक में मेरी यात्रा इस जिज्ञासा से प्रेरित है कि सिस्टम कैसे काम करते हैं—और अधिक महत्वपूर्ण रूप से, उन्हें कैसे दोहन और सुरक्षित किया जा सकता है।",
        about_para2: "बक प्रेस लिमिटेड में अपनी इंटर्नशिप के दौरान, मुझे घाना के पासपोर्ट आवेदन पोर्टल का परीक्षण करने, बग की पहचान करने और सिस्टम प्रशासन कार्यों के साथ काम करने का व्यावहारिक अनुभव मिला। लेकिन मेरा असली जुनून मेरी अंतिम वर्ष की परियोजना के दौरान उभरा: VulnScout का निर्माण, एक स्वचालित भेद्यता स्कैनिंग उपकरण जो HTTP अनुरोध तस्करी, सूचना प्रकटीकरण और रिमोट कोड निष्पादन भेद्यताओं का पता लगाता है।",
        about_para3: "मेरा मानना है कि साइबर सुरक्षा केवल भेद्यताओं को खोजने के बारे में नहीं है—यह मानवीय तत्व को समझने, जोखिमों को स्पष्ट रूप से संप्रेषित करने और लोगों की रक्षा करने वाली प्रणालियों के निर्माण के बारे में है। चाहे मैं Nmap स्क्रिप्ट लिख रहा हूं, Tableau में डेटा का विश्लेषण कर रहा हूं, या सदस्यता अध्यक्ष के रूप में अपने लियो क्लब का नेतृत्व कर रहा हूं, मैं हर चुनौती को जवाबदेही, अनुकूलन क्षमता और निरंतर सीखने की प्रतिबद्धता के साथ लेता हूं।",
        
        // Impact Metrics
        impact_title: "प्रभाव मेट्रिक्स",
        impact_scan_time: "% स्कैन समय में कमी",
        impact_false_positives: "% गलत सकारात्मक में कमी",
        impact_members: "+ सदस्यों का नेतृत्व किया",
        impact_projects: "प्रमुख परियोजनाएं",
        
        // Experience Section
        experience_title: "अनुभव और शिक्षा",
        
        // Skills Section
        skills_title: "कौशल और विशेषज्ञता",
        skills_programming: "प्रोग्रामिंग भाषाएं",
        skills_security: "सुरक्षा उपकरण",
        skills_tools: "उपकरण और प्लेटफॉर्म",
        skills_design: "डिज़ाइन उपकरण",
        skills_soft: "सॉफ्ट स्किल्स",
        skills_languages: "भाषाएं",
        
        // Contact Section
        contact_title: "आइए जुड़ें",
        contact_description: "चाहे आप साइबर सुरक्षा परियोजनाओं पर सहयोग करना चाहते हों, आईटी सुरक्षा पर चर्चा करना चाहते हों, या अवसरों का पता लगाना चाहते हों—मुझे आपसे सुनना अच्छा लगेगा!",
        contact_form_title: "त्वरित संदेश",
        contact_name: "आपका नाम",
        contact_email: "आपका ईमेल",
        contact_message: "आपका संदेश",
        contact_send: "संदेश भेजें",
        
        // Footer
        footer_quote: "\"सुरक्षा एक उत्पाद नहीं, बल्कि एक प्रक्रिया है।\" - ब्रूस श्नीयर",
        footer_copyright: "© 2025 शिमरन सिंह। साइबर सुरक्षा के जुनून के साथ बनाया गया।",
        footer_university: "एकेडमिक सिटी यूनिवर्सिटी | बीएससी सूचना प्रौद्योगिकी | घाना"
    }
};

// ==============================================
// DEFAULT PORTFOLIO DATA
// ==============================================
const defaultData = {
    achievements: [
        {
            id: 1,
            title: "VulnScout Development",
            description: "Developed automated vulnerability scanner reducing scan time by 65%",
            date: "2024-2025",
            category: "Technical"
        },
        {
            id: 2,
            title: "Leo Club President",
            description: "Led 30+ members in community service initiatives",
            date: "2022-2024",
            category: "Leadership"
        },
        {
            id: 3,
            title: "Radio Show Interviewer",
            description: "Interviewed prominent Ghanaian influencers including Bola Ray",
            date: "2022-2023",
            category: "Media"
        }
    ],
    
    certificates: [
        {
            id: 1,
            title: "Data Analytics Job Simulation",
            issuer: "Deloitte Australia (Forage)",
            date: "July 2025",
            link: "#",
            image: "https://via.placeholder.com/400x300?text=Deloitte+Certificate"
        },
        {
            id: 2,
            title: "Digital Transformation Job Simulation",
            issuer: "BCG (Forage)",
            date: "November 2024",
            link: "#",
            image: "https://via.placeholder.com/400x300?text=BCG+Certificate"
        }
    ],
    
    metrics: {
        scanTimeReduced: 65,
        falsePositivesReduced: 40,
        membersLed: 30,
        majorProjects: 5
    }
};

// ==============================================
// DATA MANAGEMENT FUNCTIONS
// ==============================================
class PortfolioData {
    constructor() {
        this.initializeData();
    }
    
    // Initialize data from localStorage or use defaults
    initializeData() {
        if (!localStorage.getItem('portfolioData')) {
            localStorage.setItem('portfolioData', JSON.stringify(defaultData));
        }
    }
    
    // Get all data
    getData() {
        return JSON.parse(localStorage.getItem('portfolioData') || JSON.stringify(defaultData));
    }
    
    // Update entire data object
    setData(data) {
        localStorage.setItem('portfolioData', JSON.stringify(data));
        this.triggerUpdate();
    }
    
    // Get achievements
    getAchievements() {
        return this.getData().achievements || [];
    }
    
    // Add achievement
    addAchievement(achievement) {
        const data = this.getData();
        achievement.id = Date.now();
        data.achievements.push(achievement);
        this.setData(data);
    }
    
    // Update achievement
    updateAchievement(id, updatedAchievement) {
        const data = this.getData();
        const index = data.achievements.findIndex(a => a.id === id);
        if (index !== -1) {
            data.achievements[index] = { ...data.achievements[index], ...updatedAchievement };
            this.setData(data);
        }
    }
    
    // Delete achievement
    deleteAchievement(id) {
        const data = this.getData();
        data.achievements = data.achievements.filter(a => a.id !== id);
        this.setData(data);
    }
    
    // Get certificates
    getCertificates() {
        return this.getData().certificates || [];
    }
    
    // Add certificate
    addCertificate(certificate) {
        const data = this.getData();
        certificate.id = Date.now();
        data.certificates.push(certificate);
        this.setData(data);
    }
    
    // Update certificate
    updateCertificate(id, updatedCertificate) {
        const data = this.getData();
        const index = data.certificates.findIndex(c => c.id === id);
        if (index !== -1) {
            data.certificates[index] = { ...data.certificates[index], ...updatedCertificate };
            this.setData(data);
        }
    }
    
    // Delete certificate
    deleteCertificate(id) {
        const data = this.getData();
        data.certificates = data.certificates.filter(c => c.id !== id);
        this.setData(data);
    }
    
    // Get metrics
    getMetrics() {
        return this.getData().metrics || defaultData.metrics;
    }
    
    // Update metrics
    updateMetrics(metrics) {
        const data = this.getData();
        data.metrics = { ...data.metrics, ...metrics };
        this.setData(data);
    }
    
    // Trigger custom event for data updates
    triggerUpdate() {
        window.dispatchEvent(new CustomEvent('portfolioDataUpdated'));
    }
}

// ==============================================
// LANGUAGE MANAGEMENT
// ==============================================
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('preferredLanguage') || 'en';
    }
    
    // Get current language
    getCurrentLanguage() {
        return this.currentLang;
    }
    
    // Set language
    setLanguage(lang) {
        if (translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('preferredLanguage', lang);
            this.triggerLanguageChange();
        }
    }
    
    // Get translation
    t(key) {
        return translations[this.currentLang][key] || translations['en'][key] || key;
    }
    
    // Trigger language change event
    triggerLanguageChange() {
        window.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language: this.currentLang } 
        }));
    }
}

// ==============================================
// INITIALIZE GLOBAL INSTANCES
// ==============================================
const portfolioData = new PortfolioData();
const languageManager = new LanguageManager();