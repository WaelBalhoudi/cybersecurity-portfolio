/* Edit this array to maintain projects. Set github to null when no real repository exists. */
const PROJECTS = [
 {id:'opensoc',title:'OpenSOC Lab',cat:'Network Security / SOC / SIEM',filter:'soc',featured:true,
  desc:'A controlled cybersecurity laboratory designed to explore network defense, firewall configuration, intrusion detection and centralized security monitoring.',
  tech:['pfSense','Suricata','Wazuh','Kali Linux','Ubuntu','Windows'],
  hl:['Network segmentation','Firewall rules and traffic filtering','Intrusion detection','Security event monitoring','Log analysis','Controlled security testing'],
  img:'assets/images/opensoc-lab.png',github:'https://github.com/WaelBalhoudi/opensoc-lab'},
 {id:'websec',title:'Web Application Security Labs',cat:'Web Security / Penetration Testing',filter:'web',featured:true,
  desc:'Academic and practical security testing activities focused on understanding web application vulnerabilities, identifying weaknesses and evaluating security mechanisms.',
  tech:['Burp Suite','OWASP ZAP','Kali Linux','OWASP Top 10'],
  hl:['Vulnerability testing','HTTP request and response analysis','Authentication and access-control testing','Security findings documentation','Remediation recommendations'],
  img:'assets/images/web-security.png',github:null},
 {id:'ransom',title:'Ransomware Simulation Lab',cat:'Cryptography / Defensive Security',filter:'crypto',
  desc:'An isolated educational laboratory simulating ransomware-related file operations to explore cryptographic protection, recovery mechanisms and defensive monitoring. A controlled simulation, not real ransomware.',
  tech:['Python','AES-256-GCM','RSA-2048','SHA-256','Tkinter','Sysmon','Wazuh'],
  hl:['Controlled file encryption simulation','Hybrid cryptographic approach','File integrity verification','Recovery mechanisms','Security event monitoring'],
  img:'assets/images/ransomware-simulation.png',github:null},
 {id:'autocloud',title:'AutoCloud Enterprise',cat:'Infrastructure / Cloud / System Administration',filter:'infra',
  desc:'An automated private cloud infrastructure project designed to explore centralized identity management, collaboration services, infrastructure automation and monitoring.',
  tech:['Ansible','Vagrant','VirtualBox','Docker','Nextcloud','FreeIPA','Prometheus','Grafana','Wazuh'],
  hl:['Infrastructure provisioning','Centralized identity management','Linux administration','Service deployment','Infrastructure monitoring','Security hardening foundations'],
  img:'assets/images/autocloud-enterprise.png',github:null},
 {id:'cryptshield',title:'CryptShield',cat:'Cryptography / Security Engineering',filter:'crypto',
  desc:'An educational cryptography application implementing the Affine Cipher, including encryption, decryption and cryptanalysis functionality.',
  tech:['Python','Tkinter','Affine Cipher','SHA-256'],
  hl:['Encryption and decryption','Cryptanalysis','Key validation','Graphical interface','Cryptographic concepts'],
  img:'assets/images/cryptshield.png',github:'https://github.com/WaelBalhoudi/CryptShield'},
 {id:'devops',title:'Automated DevOps Deployment',cat:'DevSecOps / Infrastructure Automation',filter:'infra',
  desc:'A full-stack application deployment workflow using automated CI/CD, containerization and infrastructure provisioning.',
  tech:['Angular','Spring Boot','PostgreSQL','GitLab CI','Docker','Ansible','Traefik'],
  hl:['Automated build and testing','Containerized deployment','Infrastructure automation','HTTPS configuration','Deployment and rollback workflow'],
  img:'assets/images/devops-deployment.png',github:'https://gitlab.com/waelbalhoudi-group/todo-app',repoLabel:'GitLab'},
 {id:'agrilink',title:'AgriLink',cat:'Full-Stack Development / AI Integration',filter:'dev',
  desc:'A full-stack agricultural platform integrating a plant disease detection service with an interactive map.',
  tech:['Angular','Spring Boot','PostgreSQL','FastAPI','TensorFlow','Leaflet'],
  hl:['Full-stack web application','Plant disease detection service','Interactive map'],
  img:'assets/images/agrilink.png',github:'https://github.com/WaelBalhoudi/AgriLink'}
];
const FILTERS=[['all','All'],['web','Web Security'],['soc','Network & SOC'],['crypto','Cryptography'],['infra','Infrastructure & DevOps'],['dev','Development']];
const EXPERTISE=[
 {ic:'</>',t:'Web Application Security',d:'Understanding and assessing web application vulnerabilities, identifying security weaknesses and evaluating the effectiveness of security controls.',topics:['OWASP Top 10','SQL Injection','XSS','CSRF','Broken Access Control','Authentication & Authorization','API Security','Secure Development'],tools:['Burp Suite','OWASP ZAP','Kali Linux']},
 {ic:'>_',t:'Penetration Testing & Vulnerability Assessment',d:'Performing controlled security testing to identify weaknesses, validate vulnerabilities and document security findings.',topics:['Reconnaissance','Network Scanning','Service Enumeration','Vulnerability Identification','Security Testing','Technical Reporting'],tools:['Nmap','Kali Linux','Burp Suite','OpenVAS']},
 {ic:'✓',t:'Information Security Auditing',d:'Understanding information security audit methodologies, evaluating security controls and identifying areas requiring improvement.',topics:['Audit Methodology','Security Controls','Compliance Assessment','ISO 27001','Audit Documentation','Recommendations'],tools:[],note:'Academic knowledge; no professional auditing experience claimed.'},
 {ic:'⚖',t:'Risk Management',d:'Applying information security risk management concepts to identify, analyze, evaluate and treat information security risks.',topics:['Risk Identification','Risk Analysis','Risk Evaluation','Risk Treatment','Risk Monitoring','ISO 27005','Risk Assessment Documentation'],tools:[],note:'Academic knowledge; no professional risk-assessment experience claimed.'},
 {ic:'◎',t:'Network Security & SOC',d:'Designing and monitoring secure network environments using firewalls, intrusion detection and security information monitoring tools.',topics:['Firewall Configuration','IDS/IPS','Network Monitoring','Log Analysis','Threat Detection','Incident Investigation'],tools:['pfSense','Suricata','Wazuh']},
 {ic:'☁',t:'Cloud & Infrastructure Security',d:'Exploring secure infrastructure administration, access management, server hardening and cloud security principles.',topics:['Linux Server Hardening','Identity & Access Management','Least Privilege','Docker Security','Infrastructure Automation','Monitoring & Logging','Secure Network Architecture'],tools:['Linux','Docker','Ansible','Prometheus','Grafana']}
];
const SKILLS={'Web Security':['OWASP Top 10','Burp Suite','OWASP ZAP','HTTP Security','API Security'],'Network Security':['Nmap','pfSense','Suricata','Wireshark'],'SIEM & Monitoring':['Wazuh','Sysmon','Prometheus','Grafana'],'Systems Administration':['Linux','Ubuntu Server','Windows','Active Directory fundamentals','FreeIPA'],'Cloud & Infrastructure':['Docker','Ansible','Vagrant','VirtualBox','Traefik'],'Programming':['Python','Java','JavaScript','TypeScript','SQL'],'Risk Management & Standards':['ISO 27001','ISO 27005','Security Audit Methodology','Risk Assessment']};
