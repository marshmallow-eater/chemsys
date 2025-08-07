import { useLoaderData } from 'react-router'

import { getMainPage } from '~/model/Posts'

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
  return getMainPage(LANG)
}

export default function Home() {
  const { title, content } = useLoaderData<typeof loader>()

  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
