function postedAt(date, t) {
  const now = new Date();
  const posted = new Date(date);
  const diff = now - posted;
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffSeconds = Math.floor(diff / 1000);

  if (diffDays > 0) {
    return `${diffDays} ${t('days ago')}`;
  }
  if (diffHours > 0) {
    return `${diffHours} ${t('hours ago')}`;
  }
  if (diffMinutes > 0) {
    return `${diffMinutes} ${t('minutes ago')}`;
  }
  if (diffSeconds > 0) {
    return `${diffSeconds} ${t('seconds ago')}`;
  }
  return 'just now';
}

export { postedAt };
