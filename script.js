// ============================================================
// PAGE NAVIGATION
// ============================================================

/**
 * Switches the visible page section.
 * @param {string} pageId - The ID of the page section to show ('home', 'curricula', 'detail')
 */
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page-section').forEach(page => {
    page.classList.remove('active');
  });
  // Show selected page
  document.getElementById(pageId).classList.add('active');
  // Scroll to top
  window.scrollTo(0, 0);
}


// ============================================================
// CURRICULA FILTER & SEARCH
// ============================================================

/**
 * Filters course cards based on search input and active category checkboxes.
 * Reads #searchInput value and all checked .category-filter inputs.
 */
function filterCourses() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const categoryFilters = document.querySelectorAll('.category-filter:checked');
  const categories = Array.from(categoryFilters).map(f => f.value);

  document.querySelectorAll('.course-card').forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const category = card.dataset.category;

    const matchesSearch = title.includes(searchInput);
    const matchesCategory = categories.length === 0 || categories.includes(category);

    if (matchesSearch && matchesCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

/**
 * Resets all filters to their default state:
 * - Clears the search input
 * - Unchecks all category filters
 * - Re-checks 'Editorial Design' as the default category
 */
function clearFilters() {
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.category-filter').forEach(f => f.checked = false);

  const defaultFilter = document.querySelector('[value="Editorial Design"]');
  if (defaultFilter) defaultFilter.checked = true;

  filterCourses();
}


// ============================================================
// INIT — Attach event listeners after DOM is ready
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Attach change listeners to all category filter checkboxes
  document.querySelectorAll('.category-filter').forEach(filter => {
    filter.addEventListener('change', filterCourses);
  });
});