<template>
  <Layout>
    <div
      class="flex flex-col justify-center min-h-screen p-6 w-full max-w-lg mx-auto text-lg max-w-measure-wide"
    >
      <div class="flex flex-col sm:flex-row sm:items-center flex-wrap mb-8">
        <g-image
          src="~/img/headshot.png"
          width="100"
          quality="100"
          class="flex-none w-16 sm:w-24 rounded-full mr-4 sm:mr-8 mb-4 sm:mb-0 -ml-1"
        ></g-image>
        <div>
          <h1
            class="mb-1 sm:mb-0 leading-none text-2xl sm:text-3xl font-extrabold uppercase text-grey-darkest"
          >
            Mason Hahn
          </h1>
          <h3
            class="sm:mr-4 mb-3 w-full sm:w-auto text-base sm:text-lg font-normal normal-case text-grey-darker"
          >
            @bricksroo
          </h3>
          <div class="flex flex-wrap text-base sm:text-lg">
            <a
              href="https://twitter.com/bricksroo"
              class="mr-4 font-semibold text-green-dark hover:text-indigo-dark underline hover:no-underline"
              title="@bricksroo on Twitter"
            >
              Twitter
            </a>
            <a
              href="https://github.com/bricksroo"
              class="mr-4 font-semibold text-green-dark hover:text-indigo-dark underline hover:no-underline"
              title="@bricksroo on GitHub"
            >
              GitHub
            </a>
            <a
              href="mailto:mason@bricksroo.com"
              class="mr-4 font-semibold text-green-dark hover:text-indigo-dark underline hover:no-underline"
              title="Send me an email at mason@bricksroo.com"
            >
              Email
            </a>
            <a
              href="https://docs.google.com/gview?url=https://github.com/bricksroo/bricksroo.com/raw/master/src/mason-hahn-resume-2019-03-31.pdf"
              class="font-semibold text-green-dark hover:text-indigo-dark underline hover:no-underline"
              title="Check out my resume"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      <p class="mt-0 mb-4 leading-normal text-black text-base sm:text-lg">
        Hi, my name is Mason. I'm a front end developer from Costa Mesa, CA who
        currently works at LA Fitness on internal projects. I love design,
        subtleties, and asking "Why?". My main tools these days (besides
        straight HTML, JavaScript, and CSS) are
        <a
          href="https://vuejs.org/"
          class="text-green-dark hover:text-indigo-dark underline hover:no-underline"
          >Vue.js</a
        >
        and
        <a
          href="https://tailwindcss.com/docs/what-is-tailwind/"
          class="text-green-dark hover:text-indigo-dark underline hover:no-underline"
          >Tailwind CSS</a
        >, but I love learning and exploring new technology and strategies.
      </p>
      <p class="my-0 leading-normal text-black text-base sm:text-lg">
        I have a degree in Architectural Engineering from
        <a
          href="https://www.calpoly.edu/"
          class="text-green-dark hover:text-indigo-dark underline hover:no-underline"
          >Cal Poly SLO</a
        >
        and worked as a Structural Designer, for a bit, after school until
        making the jump to front end dev. I worked mostly on residential
        projects, but also some wild stuff like
        <a
          href="https://vitamotus.com/project/absolut-nights-zedd-brooklyn-2014/"
          class="text-green-dark hover:text-indigo-dark underline hover:no-underline"
        >
          this giant disco ball
        </a>
        and
        <a
          href="http://thedolab.com/structure/big-fish/"
          class="text-green-dark hover:text-indigo-dark underline hover:no-underline"
        >
          this Big Fish stage</a
        >. I love exploring new places, barbell training, and any kind of game,
        whether it's sports, video games, or board&nbsp;games.
      </p>
      <p class="mt-12 text-xs text-grey-darker"
        >Built with
        <a
          href="https://gridsome.org/"
          class="text-green-dark hover:text-indigo-dark underline hover:no-underline"
          title="Gridsome website"
          >Gridsome</a
        >
        and hosted on
        <a
          href="https://www.netlify.com/"
          class="text-green-dark hover:text-indigo-dark underline hover:no-underline"
          title="Netlify website"
          >Netlify</a
        >.
        <a
          href="https://github.com/bricksroo/bricksroo.com"
          class="text-green-dark hover:text-indigo-dark underline hover:no-underline"
          title="Source code for this website"
          >Source</a
        ></p
      >
    </div>
  </Layout>
</template>
