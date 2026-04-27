---
title: "NOT A PAGE"
---

<div class="not-a-page">

<pre>
 _   _  ___ _____     _
| \ | |/ _ \_   _|   / \
|  \| | | | || |    / _ \
| |\  | |_| || |   / ___ \
|_| \_|\___/ |_|  /_/   \_\

 ____   _    ____ _____
|  _ \ / \  / ___| ____|
| |_) / _ \| |  _|  _|
|  __/ ___ \ |_| | |___
|_| /_/   \_\____|_____|
</pre>

<h1>THIS IS NOT A PAGE</h1>
<p>System Error: Reality not found.</p>
<p>You have entered the void.</p>
<p>There is nothing here.</p>
<p>There never was.</p>
<p>Is this the real life? Is this just fantasy?</p>
<br/>

<button class="back-button" id="backBtn">
  [ PUSH TO COME BACK ]
</button>

</div>

<script>
  document.getElementById('backBtn').addEventListener('click', function() {
    const exits = [
      '/',
      '/protocol',
      '/postbox',
      'https://github.com/geektheviking/frea-x.com/commits/main'
    ];
    const pick = exits[Math.floor(Math.random() * exits.length)];
    window.location.href = pick;
  });
</script>
