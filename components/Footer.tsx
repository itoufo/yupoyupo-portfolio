export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {currentYear} ゆぽゆぽ. All rights reserved.</p>
      </div>
    </footer>
  )
}
