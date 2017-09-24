# teufel-it-react
### react version of teufel-it.de

### Scripts
```bash
npm run / yarn
start ----------------- run web-ui, with hot-reload
test ------------------ runs jest
test:watch ------------ runs jest with watch and coverage
build ----------------- build
deploy ---------------- deploy to github pages
```

### Notes on using custom domain with Github Pages

#### Set up domain host to point to github

- An A record @ 192.30.252.153
- An A record @ 192.30.252.154
- A CNAME aliasing www.domain.com to username.github.io. (note the trailing period)
- The "CNAME" file in the GitHub Pages repo contains the text "domain.com"

#### Set up SSL using cloudflare reverse proxy

- Register Domain on Cloudflare
- Set nameserver of your Domain hoster to Cloudflare 
    - dom.ns.cloudflare.com
    - june.ns.cloudflare.com
- Go to Crypto and set "Always use SSL", "Automatic HTTPS rewrites"

### License
See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).