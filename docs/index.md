<div class="mine-hero">
  <div class="mine-hero-text">
    <h1><span class="accent">MC23hub</span><br>The one and only place for MC23</h1>
    <p class="subtitle">Welcome to the documentation</p>
  </div>

  <div class="mine-hero-image">
    <img src="https://github.com/user-attachments/assets/c469ddfe-22cf-4129-9300-bfa9433d0629" alt="Minecraft cube" />
  </div>


</div>
  <a class="visit" href="https:\\mc23hub.github.io/">
    <p class="linkv">Visit the page</p>
  </a>

<style>
.mine-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 0;
  gap: 2rem;
}

.mine-hero-text h1 {
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1.1;
  color: #DEDED6;
}

.mine-hero-text .accent {
  color: #0456EE; /* cyan highlight */
}

.subtitle {
  color: #ccc;
  margin-top: 1rem;
  font-size: 1.2rem;
}

.mine-hero-image img {
  width: 600px;
  height: auto;
  transform: rotate(2deg);
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.4));
}
.visit{
    height: 3rem;
    width: 6rem;
    background-color: #ffffff;
}
.linkv {
    font-size: 1.3rem;
    color: #ccc;
    text-decoration: underline;
    font-weight: 500;
}

/* Mobile */
@media (max-width: 768px) {
  .mine-hero {
    flex-direction: column;
    text-align: center;
  }

  .mine-hero-image img {
    margin-top: 1.5rem;
  }
}
</style>