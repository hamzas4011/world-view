'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type Country = {
  name: string
  alpha2Code: string
  flags: { png: string }
  region: string
  capital?: string
}

const NON_SOVEREIGN_EXCLUDE = new Set([
  'antarctica',
  'french polynesia',
  'puerto rico',
  'guam',
  'bermuda',
  'greenland',
  'hong kong',
  'macau',
  'new caledonia',
  'western sahara',
  'american samoa',
  'cayman islands',
  'gibraltar',
  'faroe islands',
  'cook islands',
  'niue',
  'bouvet island',
  'british indian ocean territory',
  'french southern territories',
  'south georgia',
  'heard island and mcdonald islands',
  'norfolk island',
  'pitcairn',
  'saint helena',
  'tokelau',
  'wallis and futuna',
  'united states minor outlying islands',
  'åland islands',
])

export default function ExplorePage() {
  const [countries, setCountries] = useState<Country[]>([])
  const [filtered, setFiltered] = useState<Country[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch('/api/countries')
        const data = await res.json()

        const sortedData = [...data]
          .filter((c: Country) => !NON_SOVEREIGN_EXCLUDE.has(c.name.toLowerCase()))
          .sort((a: Country, b: Country) => a.name.localeCompare(b.name))

        setCountries(sortedData)
        setFiltered(sortedData)
      } catch (err) {
        console.error('Error fetching countries:', err)
      }
    }

    fetchCountries()
  }, [])

  useEffect(() => {
    const filteredData = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
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
              <div className="w-full h-40 rounded bg-gray-100 flex items-center justify-center overflow-hidden">
                {country.flags?.png ? (
                  <img
                    src={country.flags.png}
                    alt={country.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400 text-sm">No flag available</span>
                )}
              </div>
              <h2 className="text-xl font-semibold mt-2">{country.name}</h2>
              <p className="text-sm text-gray-500">
                Capital: {country.capital || 'N/A'}
              </p>
              <p className="text-sm text-gray-500 mb-4">Region: {country.region}</p>

              <Link
                href={`/explore/${country.alpha2Code}`}
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