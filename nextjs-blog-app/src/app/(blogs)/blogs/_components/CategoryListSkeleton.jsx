'use client'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function CategoryListSkeleton() {
  return (
    <ul className="space-y-4">
      <li><Skeleton height={20} width={100} /></li>
      {[...Array(5)].map((_, i) => (
        <li key={i}>
          <Skeleton height={20} width={150} />
        </li>
      ))}
    </ul>
  )
}
