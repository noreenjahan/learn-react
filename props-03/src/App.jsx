import { useMemo, useState } from 'react'
import Card from './components/Card'

const initialMembers = [
  {
    id: 1,
    name: 'Ayesha Khan',
    role: 'Developer',
    img: 'https://images.unsplash.com/photo-1773328781225-4d9f268510fa?q=80&w=774&auto=format&fit=crop',
    bio: 'Builds UI features and connects APIs with React.',
  },
  {
    id: 2,
    name: 'Ayesha Noor',
    role: 'Designer',
    img: 'https://plus.unsplash.com/premium_photo-1677159451012-6722af343f1c?w=800&auto=format&fit=crop&q=60',
    bio: 'Designs clean interfaces and component visuals.',
  },
  {
    id: 3,
    name: 'Arsalan Malik',
    role: 'Tester',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60',
    bio: 'Finds bugs and keeps quality high before release.',
  },
]

const App = () => {
  const [members, setMembers] = useState(initialMembers)
  const [search, setSearch] = useState('')
  const [roleFilter, setRoleFilter] = useState('All')
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)

  const roles = useMemo(() => {
    return ['All', ...new Set(members.map((member) => member.role))]
  }, [members])

  const visibleMembers = useMemo(() => {
    return members.filter((member) => {
      const matchesSearch = member.name.toLowerCase().includes(search.toLowerCase())
      const matchesRole = roleFilter === 'All' || member.role === roleFilter
      const matchesFavorite = !showFavoritesOnly || member.isFavorite
      return matchesSearch && matchesRole && matchesFavorite
    })
  }, [members, roleFilter, search, showFavoritesOnly])

  const toggleFavorite = (memberId) => {
    setMembers((currentMembers) =>
      currentMembers.map((member) => {
        if (member.id === memberId) {
          return { ...member, isFavorite: !member.isFavorite }
        }
        return member
      }),
    )
  }

  return (
    <main className="app-shell">
      <header className="header">
        <h1>Props + State Mini Project</h1>
        <p>Learn props by passing member data, and state by filtering and favoriting cards.</p>
      </header>

      <section className="controls">
        <input
          type="text"
          placeholder="Search member..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select value={roleFilter} onChange={(event) => setRoleFilter(event.target.value)}>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>

        <label className="favorite-toggle">
          <input
            type="checkbox"
            checked={showFavoritesOnly}
            onChange={(event) => setShowFavoritesOnly(event.target.checked)}
          />
          Favorites only
        </label>
      </section>

      <section className="parent">
        {visibleMembers.length === 0 ? (
          <p className="empty-state">No members match your filter.</p>
        ) : (
          visibleMembers.map((member) => (
            <Card
              key={member.id}
              user={member.name}
              role={member.role}
              img={member.img}
              bio={member.bio}
              isFavorite={Boolean(member.isFavorite)}
              onToggleFavorite={() => toggleFavorite(member.id)}
            />
          ))
        )}
      </section>
    </main>
  )
}

export default App
