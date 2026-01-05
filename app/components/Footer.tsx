export default function Footer() {
  return (
    <footer className=\"bg-gray-800 text-white py-8\">
      <div className=\"container mx-auto px-6 text-center\">
        <p>&copy; {new Date().getFullYear()} AnGeo Extracts. All rights reserved.</p>
      </div>
    </footer>
  );
}
