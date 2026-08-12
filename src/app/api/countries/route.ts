import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch(
      'https://countries.dev/countries?fields=name,flags,region,capital,subregion,population,area,languages,currencies,timezones',
      { cache: 'no-store' }
    )

    if (!res.ok) {
      console.error('Failed to fetch countries:', res.status)
      return NextResponse.json({ error: 'Failed to fetch countries' }, { status: 502 })
    }

    const countries = await res.json()
    return NextResponse.json(countries)
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}