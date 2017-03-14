import Head from 'next/head'

export default ({title}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"/>
      <link rel="stylesheet" href="https://cdn.rawgit.com/necolas/normalize.css/master/normalize.css"/>
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css'/>
      <style>{`
        nav {
          display: block;
          padding: 1rem;
          background: #f2f2f2;
        }
        nav a {
          padding: 1rem;
          display: inline-block;
          margin-right: 1rem;
        }
        ul,li {
          list-style: none;
        }
        li {
          margin-bottom: 1rem;
        }
        li.button {
          padding: 0;
          margin-bottom: 0;
        }
        .contentWrapper {
          padding: 2em;
          box-sizing: border-box;
        }
        .author {
          font-weight: bold;
        }
      `}
      </style>
    </Head>
  </div>
)
