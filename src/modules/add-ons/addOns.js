import { setAddOns, getAddOns, getBuilderPhase } from '../../utils/state.js';
import { getItinerary, getFlightPreferences } from '../../utils/state.js';
import { calculateTotalBudget } from '../../utils/budget.js';

// Add-ons configuration
const ADDONS_CONFIG = [
  {id: 'travel-insurance', label: 'Comprehensive Travel Insurance'},
  { id: 'visa', label: 'Visa Assistance' },
  { id: 'forex', label: 'Foreign Exchange' },
  { id: 'concierge', label: 'Concierge Service' },
  { id: 'local-guide', label: 'Local Guide' },
  { id: 'elderly', label: 'Elderly Assistance' },
  { id: 'medical', label: 'Medical Assistance' },
  { id: 'financing', label: 'Easy Financing' },
  {id: 'local-transport', label: 'Local Transport' },
];

// Form rendering
export const renderAddOnsForm = () => {
  const savedAddOns = getAddOns();
  
  // Only remove the continue button if we're in the add-ons phase
  const currentPhase = getBuilderPhase();
  if (currentPhase === 'addons') {
    document.querySelector('#submit-complete-trip')?.remove();
  }
  
  return `
    <div class="addons-form-container">
      <h2>Select Add-Ons</h2>
      <form id="addons-form" class="addons-form">
        <div class="addons-grid">
          ${ADDONS_CONFIG.map(addon => `
            <label class="addon-option">
              <input type="checkbox" 
                     name="addon" 
                     value="${addon.id}"
                     ${savedAddOns[addon.id] ? 'checked' : ''}>
              <div class="addon-card">
                <h4>${addon.label}</h4>
              </div>
            </label>
          `).join('')}
        </div>
        
        <div class="form-actions">
          <button type="submit" class="btn-primary">
            <i class="fas fa-arrow-right"></i> Continue to Summary
          </button>
        </div>
      </form>
    </div>
  `;
};

// Form setup

export const setupAddOnsForm = () => {
  const form = document.getElementById('addons-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const selectedAddOns = {};
    
    // Convert to boolean map
    ADDONS_CONFIG.forEach(addon => {
      selectedAddOns[addon.id] = formData.getAll('addon').includes(addon.id);
    });

    setAddOns(selectedAddOns);
    
    // Show final completion
    showFinalCompletion();
  });
};

// Add this new function to handle final completion
const showFinalCompletion = () => {
  // First show trip summary
  const tripData = {
    destinations: getItinerary(),
    flights: getFlightPreferences(),
    addOns: getAddOns(),
    summary: {
      totalDays: getItinerary().reduce((sum, item) => sum + item.tripDetails.duration, 0),
      estimatedCost: calculateTotalBudget(getItinerary())
    }
  };

  // Build trip summary HTML
  const tripSummaryHtml = `
    <div class="trip-summary">
      <div class="summary-section">
        <h3>Trip Overview</h3>
        <p><strong>Destinations:</strong> ${tripData.destinations.length}</p>
        <p><strong>Total Duration:</strong> ${tripData.summary.totalDays} days</p>
        <p><strong>Estimated Cost:</strong> ₹${tripData.summary.estimatedCost.toLocaleString('en-IN')}</p>
      </div>
    </div>
  `;

  // Show trip summary first
  Swal.fire({
    title: 'Trip Summary',
    html: tripSummaryHtml,
    showCancelButton: true,
    confirmButtonText: 'Continue to Customer Details',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      // Show customer details form
      Swal.fire({
        title: 'Customer Details',
        html: `
          <form id="customer-details-form">
            <div class="form-group">
              <label for="customer-name">Name:</label>
              <input type="text" id="customer-name" name="name" required>
            </div>
            <div class="form-group">
              <label for="customer-email">Email:</label>
              <input type="email" id="customer-email" name="email" required>
            </div>
            <div class="form-group">
              <label for="customer-phone">Phone Number:</label>
              <input type="tel" id="customer-phone" name="phone" required>
            </div>
          </form>
        `,
        showCancelButton: true,
        confirmButtonText: 'Submit Trip',
        cancelButtonText: 'Cancel',
        preConfirm: () => {
          const form = Swal.getPopup().querySelector('#customer-details-form');
          const customerData = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            trip: tripData
          };
          
          // Log complete trip data
          console.log('Complete Trip Submission:', {
            customer: {
              name: customerData.name,
              email: customerData.email,
              phone: customerData.phone
            },
            ...tripData,
            createdAt: new Date().toISOString()
          });
          
          return customerData;
        }
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            title: 'Success!',
            text: 'Trip submitted successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        }
      });
    }
  });

  // Add styles
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    .trip-summary {
      display: grid;
      gap: 1.5rem;
      padding: 1.5rem;
      max-width: 500px;
      margin: 0 auto;
    }
    
    .summary-section {
      background: #f8f9fa;
      padding: 1.25rem;
      border-radius: 12px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    
    .summary-section h3 {
      margin: 0 0 1.25rem 0;
      color: #2c3e50;
      font-size: 1.25rem;
    }
    
    .summary-section p {
      margin: 0.75rem 0;
      color: #666;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    
    .summary-section strong {
      color: #2c3e50;
      font-weight: 600;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.75rem;
      font-size: 0.95rem;
      color: #333;
    }
    
    .form-group input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }
    
    .form-group input:focus {
      outline: none;
      border-color: #2c3e50;
      box-shadow: 0 0 0 2px rgba(44, 62, 80, 0.1);
    }
    
    /* SweetAlert container styles */
    .swal2-container {
      z-index: 10000 !important;
    }
    
    .swal2-popup {
      width: 90% !important;
      max-width: 500px !important;
      border-radius: 16px !important;
      padding: 1.5rem !important;
    }
    
    .swal2-title {
      font-size: 1.5rem !important;
      color: #2c3e50 !important;
      margin-bottom: 1.25rem !important;
    }
    
    .swal2-html-container {
      font-size: 1rem !important;
      color: #333 !important;
    }
    
    .swal2-confirm, .swal2-cancel {
      padding: 0.75rem 1.5rem !important;
      font-size: 1rem !important;
      border-radius: 8px !important;
      min-height: auto !important;
    }
    
    .swal2-confirm {
      background-color: #2c3e50 !important;
      color: white !important;
    }
    
    .swal2-cancel {
      background-color: #e9ecef !important;
      color: #333 !important;
    }
    
    /* Mobile-specific styles */
    @media (max-width: 768px) {
      .trip-summary {
        padding: 1rem;
      }
      
      .summary-section {
        padding: 1rem;
      }
      
      .summary-section h3 {
        font-size: 1.15rem;
      }
      
      .summary-section p {
        font-size: 0.9rem;
      }
      
      .form-group input {
        font-size: 0.95rem;
        padding: 0.65rem;
      }
      
      .swal2-popup {
        width: 95% !important;
        padding: 1.25rem !important;
      }
      
      .swal2-title {
        font-size: 1.3rem !important;
      }
      
      .swal2-confirm, .swal2-cancel {
        padding: 0.65rem 1.25rem !important;
      }
    }
  `;
  document.head.appendChild(styleEl);
};

// Final options (to be called after add-ons submission)
export const renderFinalOptions = () => {
  return `
    <div class="final-options">
      <h2>Your Itinerary is Ready!</h2>
      <div class="option-buttons">
        <button id="send-to-desk" class="btn-secondary">
          <i class="fas fa-envelope"></i> Send to Travel Desk
        </button>
        <button id="view-itinerary" class="btn-primary">
          <i class="fas fa-file-alt"></i> View Full Itinerary
        </button>
      </div>
    </div>
  `;
};

// Final options setup
export const setupFinalOptions = () => {
  document.getElementById('send-to-desk')?.addEventListener('click', () => {
    console.log('Sending to travel desk:', {
      ...getItinerary(),
      ...getFlightPreferences(),
      ...getAddOns()
    });
  });

  document.getElementById('view-itinerary')?.addEventListener('click', () => {
    // Implement itinerary viewer
  });
};