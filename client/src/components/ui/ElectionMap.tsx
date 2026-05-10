import { useEffect, useRef } from 'react'
import { geoAlbersUsa, geoPath } from 'd3-geo'
import { select } from 'd3-selection'
import { feature } from 'topojson-client'
import type { Topology, GeometryCollection } from 'topojson-specification'
import { color as d3Color } from 'd3-color'
const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"

interface ElectionMapProps {
  getStateColor: (stateName: string) => string
  onStateClick?: (stateName: string) => void
  selectedState?: string | null
}

export const ElectionMap = ({ getStateColor, onStateClick, selectedState }: ElectionMapProps) => {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const svg = select(svgRef.current)
    svg.selectAll('*').remove()

    const width = svgRef.current.clientWidth
    const height = width * 0.6

    svg.attr('viewBox', `0 0 ${width} ${height}`)

    const projection = geoAlbersUsa()
      .scale(width * 1.2)
      .translate([width / 2, height / 2])

    const path = geoPath().projection(projection)

    fetch(GEO_URL)
      .then(res => res.json())
      .then((us: Topology) => {
        const statesObject = us.objects.states as GeometryCollection
        const states = feature(us, statesObject)
        const stateNames = new Map(
          statesObject.geometries.map((d: any) => [d.id, d.properties.name])
        )

        svg.selectAll('path')
          .data((states as any).features)
          .join('path')
          .attr('d', (d: any) => path(d))
          .attr('fill', (d: any) => {
            const name = stateNames.get(d.id) as string
            const color = getStateColor(name)
            if (name === selectedState) {
              return d3Color(color)?.brighter(1.5).toString() ?? color
            }
            return color
          })
          .attr('stroke', '#0a0a0f')
          .attr('stroke-width', 0.5)
          .style('cursor', 'pointer')
          .on('mouseover', function () {
            select(this).attr('opacity', 0.7)
          })
          .on('mouseout', function () {
            select(this).attr('opacity', 1)
          })
          .on('click', (_: any, d: any) => {
            const name = stateNames.get(d.id) as string
            onStateClick?.(name)
          })
      })
  }, [getStateColor, onStateClick, selectedState])

  return (
    <svg
      ref={svgRef}
      className="w-full"
      style={{ aspectRatio: '5/3' }}
    />
  )
}
