import { useLoaderData } from 'react-router'

import * as mainContent from '~/model/mainContent'

export function meta() {
  return [
    { title: 'Chemsystema' },
    {
      name: 'description',
      content: 'Chemsystema home page',
    },
  ]
}

const LANG = 'ua'

export async function loader() {
  return mainContent.get(LANG)
}

export default function Home() {
  const { about, title } = useLoaderData<typeof loader>()

  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      <div dangerouslySetInnerHTML={{ __html: about }} />
    </div>
  )
}
