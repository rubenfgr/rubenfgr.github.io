"use strict";(self.webpackChunkrubenfgr_website=self.webpackChunkrubenfgr_website||[]).push([[6244],{7070:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var s=e(4848),o=e(8453);const t={title:"Aliases"},d=void 0,i={id:"docker/aliases",title:"Aliases",description:"",source:"@site/docs/docker/aliases.md",sourceDirName:"docker",slug:"/docker/aliases",permalink:"/docs/docker/aliases",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Aliases"},sidebar:"tutorialSidebar",previous:{title:"Referencia",permalink:"/docs/docker/0referencia"},next:{title:"Dockerfiles",permalink:"/docs/docker/dockerfiles"}},a={},c=[];function l(n){const r={code:"code",pre:"pre",...(0,o.R)(),...n.components};return(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sh",children:'############################################################################\r\n#                                                                          #\r\n#               ------- Useful Docker Aliases --------                     #\r\n#                                                                          #\r\n#     # Installation :                                                     #\r\n#     copy/paste these lines into your .bashrc or .zshrc file or just      #\r\n#     type the following in your current shell to try it out:              #\r\n#                                                                          #\r\n#     # Usage:                                                             #\r\n#     dcu            : docker-compose up -d                                #\r\n#     dcd            : docker-compose down                                 #\r\n#     dex <container>: execute a bash shell inside the RUNNING <container> #\r\n#     di <container> : docker inspect <container>                          #\r\n#     dim            : docker images                                       #\r\n#     dip            : IP addresses of all running containers              #\r\n#     dl <container> : docker logs -f <container>                          #\r\n#     dnames         : names of all running containers                     #\r\n#     dps            : docker ps                                           #\r\n#     dpsa           : docker ps -a                                        #\r\n#     drmc           : remove all exited containers                        #\r\n#     drmid          : remove all dangling images                          #\r\n#     drun <image>   : execute a bash shell in NEW container from <image>  #\r\n#     dsr <container>: stop then remove <container>                        #\r\n#                                                                          #\r\n############################################################################\r\n\r\nfunction dnames-fn {\r\n\tfor ID in `docker ps | awk \'{print $1}\' | grep -v \'CONTAINER\'`\r\n\tdo\r\n    \tdocker inspect $ID | grep Name | head -1 | awk \'{print $2}\' | sed \'s/,//g\' | sed \'s%/%%g\' | sed \'s/"//g\'\r\n\tdone\r\n}\r\n\r\nfunction dip-fn {\r\n\techo "IP addresses of all named running containers"\r\n\r\n\tfor DOC in `dnames-fn`\r\n\tdo\r\n  \t\tIP=`docker inspect $DOC | grep -m3 IPAddress | cut -d \'"\' -f 4 | tr -d "\\n"`\r\n  \t\techo $DOC : $IP\r\n\tdone\r\n}\r\n\r\nfunction dex-fn {\r\n\tdocker exec -it $1 /bin/bash\r\n}\r\n\r\nfunction di-fn {\r\n\tdocker inspect $1\r\n}\r\n\r\nfunction dl-fn {\r\n\tdocker logs -f $1\r\n}\r\n\r\nfunction drun-fn {\r\n\tdocker run -it $1 /bin/bash\r\n}\r\n\r\nfunction dsr-fn {\r\n\tdocker stop $1;docker rm $1\r\n}\r\n\r\nalias dcu="docker-compose up -d"\r\nalias dcd="docker-compose down"\r\nalias dex=dex-fn\r\nalias di=di-fn\r\nalias dim="docker images"\r\nalias dip=dip-fn\r\nalias dl=dl-fn\r\nalias dnames=dnames-fn\r\nalias dps="docker ps"\r\nalias dpsa="docker ps -a"\r\nalias drmc="docker ps -a -q -f status=exited | xargs docker rm"\r\nalias drmid="docker images -f dangling=true -q | xargs docker rmi"\r\nalias drun=drun-fn\r\nalias dsr=dsr-fn\n'})})}function u(n={}){const{wrapper:r}={...(0,o.R)(),...n.components};return r?(0,s.jsx)(r,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},8453:(n,r,e)=>{e.d(r,{R:()=>d,x:()=>i});var s=e(6540);const o={},t=s.createContext(o);function d(n){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function i(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:d(n.components),s.createElement(t.Provider,{value:r},n.children)}}}]);