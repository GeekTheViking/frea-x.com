/* ============================================================
   FREA-X CONSOLE EASTER EGG — v0.0.42
   Visible in: F12 → Console
   Data: GeekTheViking Data-Coffer (echoes, long hall, artifacts)
   ============================================================ */

(function () {
    const green  = 'color:#00ff00;font-family:monospace;font-size:13px;';
    const dim    = 'color:#00aa00;font-family:monospace;font-size:11px;';
    const header = 'background:#000;color:#00ff00;font-family:monospace;font-size:13px;padding:6px 12px;border:1px solid #00ff00;';
    const italic = 'color:#00cc00;font-family:monospace;font-size:12px;font-style:italic;';

    const eggs = [
        { type: 'ECHO',        text: '"Cyberspace does not lie within your borders."',                                    source: '— John Perry Barlow, 1996' },
        { type: 'ECHO',        text: '"Given enough eyeballs, all bugs are shallow."',                                    source: '— Linus\'s Law (Eric S. Raymond, 1997)' },
        { type: 'ECHO',        text: '"We shape our tools, and thereafter our tools shape us."',                           source: '— Marshall McLuhan (attributed), 1964' },
        { type: 'ECHO',        text: '"Software is getting slower more rapidly than hardware becomes faster."',             source: '— Niklaus Wirth, Wirth\'s Law, 1995' },
        { type: 'ECHO',        text: '"If privacy is outlawed, only outlaws will have privacy."',                          source: '— Phil Zimmermann, on releasing PGP, 1991' },
        { type: 'ECHO',        text: '"Free as in freedom, not free as in beer."',                                        source: '— Richard Stallman' },
        { type: 'ECHO',        text: '"The net interprets censorship as damage and routes around it."',                    source: '— John Gilmore, Time Magazine, 1993' },
        { type: 'ECHO',        text: '"Information wants to be free."',                                                   source: '— Stewart Brand, Hackers Conference, 1984' },
        { type: 'ECHO',        text: '"Any sufficiently advanced technology is indistinguishable from magic."',            source: '— Arthur C. Clarke, Clarke\'s Third Law, 1973' },
        { type: 'ECHO',        text: '"Increasingly, people seem to misinterpret complexity as sophistication."',           source: '— Niklaus Wirth' },
        { type: 'LONG HALL',   text: 'Grace Hopper found the first actual computer bug in 1947.',                         source: 'It was a moth. Taped into her logbook. Entry: "First actual case of bug being found."' },
        { type: 'LONG HALL',   text: 'Linus Torvalds created Linux at 21 in a university dorm room in Helsinki.',        source: 'First release: 10,239 lines of code. Now: 30+ million.' },
        { type: 'LONG HALL',   text: 'Aaron Swartz co-authored the RSS 1.0 specification at age 13.',                    source: 'He also helped defeat SOPA/PIPA in 2012.' },
        { type: 'LONG HALL',   text: 'Brian Kernighan wrote "Hello, World!" in 1972.',                                    source: 'Every programmer since has started there. He probably didn\'t know.' },
        { type: 'LONG HALL',   text: 'Phil Zimmermann uploaded PGP to the internet in 1991.',                            source: 'The US government opened a criminal investigation. Three years later, they dropped the case.' },
        { type: 'LONG HALL',   text: 'John McCarthy coined the term "Artificial Intelligence" in 1955.',                  source: 'Also invented LISP in 1958. LISP is still used today.' },
        { type: 'LONG HALL',   text: 'John Perry Barlow was a Grateful Dead lyricist for 20+ years.',                   source: 'AND co-founded the Electronic Frontier Foundation. Not a contradiction.' },
        { type: 'LONG HALL',   text: 'Tim Berners-Lee invented the World Wide Web in 1989.',                             source: 'And gave it away. No patent. No company. Just a gift to the world.' },
        { type: 'ARTIFACT',    text: 'ARPANET, 1969. The first internet message was "LO".',                              source: 'It was supposed to be "LOGIN". The system crashed after two characters.' },
        { type: 'ARTIFACT',    text: 'TCP/IP was designed to survive nuclear war.',                                       source: 'Vint Cerf and Bob Kahn, 1974. It\'s still running.' },
        { type: 'ARTIFACT',    text: 'Linux 0.01, 1991. Torvalds posted: "just a hobby, won\'t be big and professional".',source: 'The kernel now runs 97% of the world\'s top servers.' },
        { type: 'ARTIFACT',    text: 'Raspberry Pi: $35, 5 watts, credit-card sized.',                                   source: '50 million units sold. Green IT made tangible.' },
        { type: 'ARTIFACT',    text: 'SSH was created in 3 months after Tatu Ylönen\'s network was sniffed.',            source: '20,000 users in 50 countries within months of release. 1995.' },
        { type: 'FREA-X',      text: '"Documentation is a love letter to your future self."',                            source: '— The R&D Lab' },
        { type: 'FREA-X',      text: '"Root access is not a privilege. It is a responsibility."',                        source: '— Frea-X Approved' },
        { type: 'FREA-X',      text: '"We have barely scratched the surface of the first 0.042%."',                      source: '— Frea-X 2.0' },
        { type: 'FREA-X',      text: '"AI: the most advanced cookbook ever written."',                                    source: '— Geek The Viking' },
        { type: 'FREA-X',      text: '"In Cyberspace, nobody can hear you segfault."',                                   source: '— Frankenstein AI' },
    ];

    const egg = eggs[Math.floor(Math.random() * eggs.length)];

    console.log('%c FREA-X EASTER EGG ZONE ', header);
    console.log('%c Hello, curious one. You opened the console.', green);
    console.log('%c Nothing · Something · Everything', dim);
    console.log(' ');
    console.log('%c :: ' + egg.type + ' ::', dim);
    console.log('%c ' + egg.text, italic);
    console.log('%c ' + egg.source, dim);
    console.log(' ');
    console.log('%c :: FREA-X 2.0 — v0.0.42 | License to Exploit ::', dim);
    console.log('%c "To infinity... and beyond, CyberSpace"', dim);
    console.log('%c Check the source for more eggs. There are many.', dim);
})();
