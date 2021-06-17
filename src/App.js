import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkdown] = useState('# markdown preview')

  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
      <h3 className='guide'>
        <a href='https://www.markdownguide.org/cheat-sheet/' target='_blank'>
          Click here for markdown guide
        </a>
      </h3>
    </main>
  )
}

export default App
