export function getThemeClasses(theme: 'light' | 'dark') {
  return {
    bg: {
      primary: theme === 'dark' ? 'bg-black' : 'bg-white',
      secondary: theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50',
      gradient: theme === 'dark'
        ? 'bg-gradient-to-b from-black via-gray-900 to-black'
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-100',
      card: theme === 'dark'
        ? 'bg-gradient-to-br from-gray-900/90 to-black/90'
        : 'bg-gradient-to-br from-white to-gray-50/50',
      overlay: theme === 'dark' ? 'bg-black/80' : 'bg-white/80',
    },
    text: {
      primary: theme === 'dark' ? 'text-white' : 'text-gray-900',
      secondary: theme === 'dark' ? 'text-gray-400' : 'text-gray-700',
      tertiary: theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
    },
    border: {
      primary: theme === 'dark' ? 'border-gray-800' : 'border-gray-200',
      secondary: theme === 'dark' ? 'border-white/10' : 'border-gray-200',
    },
  };
}
