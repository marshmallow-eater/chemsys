import { index, route, type RouteConfig } from '@react-router/dev/routes'

export default [
    index('routes/home.tsx'),
    route('contacts', 'routes/contacts.tsx'),
    route('*', 'routes/notFound.tsx'),
] satisfies RouteConfig
