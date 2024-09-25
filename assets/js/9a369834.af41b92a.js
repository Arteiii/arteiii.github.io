"use strict";(self.webpackChunkarteiii_github_io=self.webpackChunkarteiii_github_io||[]).push([[7152],{6124:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=r(4848),t=r(8453);const i={sidebar_position:2,sidebar_label:"Ports",toc_min_heading_level:2,toc_max_heading_level:5},l="Ports",o={id:"cheatsheets/networking/ports",title:"Ports",description:"Port Ranges",source:"@site/docs/cheatsheets/networking/ports.md",sourceDirName:"cheatsheets/networking",slug:"/cheatsheets/networking/ports",permalink:"/docs/cheatsheets/networking/ports",draft:!1,unlisted:!1,editUrl:"https://github.com/arteiii/arteiii.github.io/tree/main/docs/cheatsheets/networking/ports.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Ports",toc_min_heading_level:2,toc_max_heading_level:5},sidebar:"docsSidebar",previous:{title:"TCP / IP Model",permalink:"/docs/cheatsheets/networking/tcp-ip-model"},next:{title:"Web",permalink:"/docs/cheatsheets/networking/web"}},a={},d=[{value:"Port Ranges",id:"port-ranges",level:2},{value:"Network Tools",id:"network-tools",level:2},{value:"nmap",id:"nmap",level:3},{value:"netstat",id:"netstat",level:3},{value:"ss",id:"ss",level:3},{value:"lsof",id:"lsof",level:3},{value:"Firewall Configuration",id:"firewall-configuration",level:2},{value:"iptables or nftables",id:"iptables-or-nftables",level:3},{value:"ufw (Uncomplicated Firewall)",id:"ufw-uncomplicated-firewall",level:3},{value:"Security Considerations",id:"security-considerations",level:2},{value:"Commonly Used Ports",id:"commonly-used-ports",level:2},{value:"Port 20/21 (FTP)",id:"port-2021-ftp",level:3},{value:"Port 22 (SSH)",id:"port-22-ssh",level:3},{value:"Port 23 (Telnet)",id:"port-23-telnet",level:3},{value:"Port 25 (SMTP)",id:"port-25-smtp",level:3},{value:"Port 53 (DNS)",id:"port-53-dns",level:3},{value:"Port 80 (HTTP)",id:"port-80-http",level:3},{value:"Port 110 (POP3)",id:"port-110-pop3",level:3},{value:"Port 143 (IMAP)",id:"port-143-imap",level:3},{value:"Port 443 (HTTPS)",id:"port-443-https",level:3},{value:"Port 3306 (MySQL/MariaDB)",id:"port-3306-mysqlmariadb",level:3},{value:"Port 5432 (PostgreSQL)",id:"port-5432-postgresql",level:3},{value:"Port 6379 (Redis)",id:"port-6379-redis",level:3},{value:"Port 8080 (HTTP Alternate)",id:"port-8080-http-alternate",level:3},{value:"Resources",id:"resources",level:2}];function c(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ports",children:"Ports"})}),"\n",(0,s.jsx)(n.h2,{id:"port-ranges",children:"Port Ranges"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Well-known Ports (0-1023)"}),": For system-wide services and standards. Require root privileges to open"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Registered Ports (1024-49151)"}),": For user-defined or less common services"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dynamic/Private Ports (49152-65535)"}),": Temporarily assigned for client-side communications"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"network-tools",children:"Network Tools"}),"\n",(0,s.jsx)(n.h3,{id:"nmap",children:"nmap"}),"\n",(0,s.jsxs)(n.p,{children:["Network scanner for checking open ports and services on remote systems.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://nmap.org/docs.html",children:"Documentation"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nmap <IP-Address>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"netstat",children:"netstat"}),"\n",(0,s.jsxs)(n.p,{children:["Display open ports and associated services.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/netstat",children:"Documentation"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"netstat -tuln\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ss",children:"ss"}),"\n",(0,s.jsxs)(n.p,{children:["Modern alternative to netstat for displaying network connections.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://www.commandlinux.com/man-page/man8/ss.8.html",children:"Documentation"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ss -tuln\n"})}),"\n",(0,s.jsx)(n.h3,{id:"lsof",children:"lsof"}),"\n",(0,s.jsxs)(n.p,{children:["List open files and associated processes, useful for checking open ports.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://lsof.readthedocs.io/en/latest/",children:"Documentation"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"lsof -i\n"})}),"\n",(0,s.jsx)(n.h2,{id:"firewall-configuration",children:"Firewall Configuration"}),"\n",(0,s.jsx)(n.h3,{id:"iptables-or-nftables",children:"iptables or nftables"}),"\n",(0,s.jsxs)(n.p,{children:["Manage Netfilter firewall rules.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://netfilter.org/documentation/",children:"Documentation"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://help.ubuntu.com/community/IptablesHowTo",children:"IptablesHowTo"})]}),"\n",(0,s.jsx)(n.h3,{id:"ufw-uncomplicated-firewall",children:"ufw (Uncomplicated Firewall)"}),"\n",(0,s.jsxs)(n.p,{children:["User-friendly frontend for iptables.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://help.ubuntu.com/community/UFW",children:"Documentation"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ufw allow 22/tcp\n"})}),"\n",(0,s.jsx)(n.h2,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Avoid unused ports: Disable or close unused ports to reduce the attack surface."}),"\n",(0,s.jsx)(n.li,{children:"Use secure protocols: Prefer encrypted protocols (e.g., SSH instead of Telnet, HTTPS instead of HTTP)."}),"\n",(0,s.jsx)(n.li,{children:"Firewall rules: Configure firewall rules to restrict access to open ports."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"commonly-used-ports",children:"Commonly Used Ports"}),"\n",(0,s.jsx)(n.h3,{id:"port-2021-ftp",children:"Port 20/21 (FTP)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Usage: File Transfer Protocol (FTP)"}),"\n",(0,s.jsx)(n.li,{children:"Port 20: Data transfers"}),"\n",(0,s.jsx)(n.li,{children:"Port 21: Control (commands and responses)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"port-22-ssh",children:"Port 22 (SSH)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Usage: Secure Shell (SSH) for secure remote connections and file transfers (SCP, SFTP)"}),"\n",(0,s.jsx)(n.li,{children:"Standard services: OpenSSH"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"port-23-telnet",children:"Port 23 (Telnet)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Usage: Unencrypted terminal protocol for remote connections (not secure and largely replaced by SSH)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"port-25-smtp",children:"Port 25 (SMTP)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Usage: Simple Mail Transfer Protocol (SMTP) for sending emails"}),"\n",(0,s.jsx)(n.li,{children:"Standard services: Postfix, Sendmail"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"port-53-dns",children:"Port 53 (DNS)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Usage: Domain Name System (DNS) for name resolution"}),"\n",(0,s.jsx)(n.li,{children:"Standard services: BIND, dnsmasq"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"port-80-http",children:"Port 80 (HTTP)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Usage: Hypertext Transfer Protocol (HTTP) for unencrypted web communication"}),"\n",(0,s.jsx)(n.li,{children:"Standard services: Apache, Nginx"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"port-110-pop3",children:"Port 110 (POP3)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Usage: Post Office Protocol Version 3 (POP3) for retrieving emails"}),"\n",(0,s.jsx)(n.li,{children:"Standard services: Dovecot, qpopper"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"port-143-imap",children:"Port 143 (IMAP)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Usage: Internet Message Access Protocol (IMAP) for retrieving and managing emails"}),"\n",(0,s.jsx)(n.li,{children:"Standard services: Dovecot, Courier"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"port-443-https",children:"Port 443 (HTTPS)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Usage: Hypertext Transfer Protocol Secure (HTTPS) for encrypted web communication"}),"\n",(0,s.jsx)(n.li,{children:"Standard services: Apache, Nginx"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"port-3306-mysqlmariadb",children:"Port 3306 (MySQL/MariaDB)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Usage: MySQL database server"}),"\n",(0,s.jsx)(n.li,{children:"Standard services: MySQL, MariaDB"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"port-5432-postgresql",children:"Port 5432 (PostgreSQL)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Usage: PostgreSQL database server"}),"\n",(0,s.jsx)(n.li,{children:"Standard services: PostgreSQL"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"port-6379-redis",children:"Port 6379 (Redis)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Usage: In-memory data structure store"}),"\n",(0,s.jsx)(n.li,{children:"Standard services: Redis"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"port-8080-http-alternate",children:"Port 8080 (HTTP Alternate)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Usage: Alternate HTTP port, often used for development purposes"}),"\n",(0,s.jsx)(n.li,{children:"Standard services: Apache Tomcat, Spring Boot"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml",children:"IANA Service Name and Transport Protocol Port Number Registry"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc6335",children:"RFC 6335"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers",children:"wikipedia"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://packetlife.net/media/library/23/common_ports.pdf",children:"COMMON PORTS Cheat Sheet (packetlife)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/shauryasharma-05/All-Ports-CheatSheet-/blob/master/AllPortsDB.txt",children:"All Ports CheatSheet"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var s=r(6540);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);