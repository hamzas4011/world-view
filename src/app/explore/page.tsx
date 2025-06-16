'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type Country = {
  name: { common: string }
  flags: { png: string }
  region: string
  capital?: string[]
}

export default function ExplorePage() {
  const [countries, setCountries] = useState<Country[]>([])
  const [filtered, setFiltered] = useState<Country[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch('/api/countries')
        const data = await res.json()

        // ✅ Sort alphabetically by common name
        const sortedData = data.sort((a: Country, b: Country) =>
          a.name.common.localeCompare(b.name.common)
        )

        setCountries(sortedData)
        setFiltered(sortedData) // Initially show all
      } catch (err) {
        console.error('Error fetching countries:', err)
      }
    }

    fetchCountries()
  }, [])

  // Handle live search
  useEffect(() => {
    const filteredData = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFiltered(filteredData)
  }, [searchTerm, countries])

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🌍 Explore All Countries</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by country name..."
          className="w-full p-3 border border-gray-300 rounded shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">No countries found.</p>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((country, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
            >
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="text-xl font-semibold mt-2">{country.name.common}</h2>
              <p className="text-sm text-gray-500">
                Capital: {country.capital?.[0] || 'N/A'}
              </p>
              <p className="text-sm text-gray-500 mb-4">Region: {country.region}</p>

              <Link
                href={`/explore/${country.name.common.toLowerCase()}`}
                className="mt-auto inline-block text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
              >
                Read more →
              </Link>
            </div>
          ))}
        </section>
      )}
    </main>
  )
}