// API configuration for backend integration
export const API_CONFIG = {
  BASE_URL: 'http://localhost:8001/api/ai',
  TIMEOUT: 30000,
};

// API endpoints
export const API_ENDPOINTS = {
  GENERATE_STRATEGY: '/strategies/generate/',
  GET_STRATEGIES: '/strategies/',
  GET_STRATEGY: (id: string) => `/strategies/${id}/`,
  UPDATE_STRATEGY_SECTION: (strategyId: string, sectionId: string) => 
    `/strategies/${strategyId}/sections/${sectionId}/`,
  OPTIMIZE_STRATEGY: (id: string) => `/strategies/${id}/optimize/`,
  EXPORT_STRATEGY: (id: string, format: string) => `/strategies/${id}/export/?format=${format}`,
  GET_TEMPLATES: '/templates/',
};

// Error handling utility
export class ApiError extends Error {
  constructor(message: string, public status?: number, public response?: any) {
    super(message);
    this.name = 'ApiError';
  }
}

// API request wrapper with error handling
export async function apiRequest(
  endpoint: string,
  options: RequestInit = {}
): Promise<any> {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        errorData.error || `HTTP error! status: ${response.status}`,
        response.status,
        errorData
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    // Network or other errors
    throw new ApiError(
      error instanceof Error ? error.message : 'Network error occurred',
      0
    );
  }
}

// Strategy generation API
export async function generateStrategy(params: {
  company_name: string;
  industry: string;
  target_audience: string;
  strategic_focus: string;
  budget?: number;
  timeline?: string;
  brand_inspiration: string;
  strategy_type: string;
}) {
  return apiRequest(API_ENDPOINTS.GENERATE_STRATEGY, {
    method: 'POST',
    body: JSON.stringify(params),
  });
}

// Get all strategies
export async function getStrategies() {
  return apiRequest(API_ENDPOINTS.GET_STRATEGIES);
}

// Get specific strategy
export async function getStrategy(id: string) {
  return apiRequest(API_ENDPOINTS.GET_STRATEGY(id));
}

// Update strategy section
export async function updateStrategySection(
  strategyId: string,
  sectionId: string,
  data: {
    content: string;
    key_points?: string[];
    recommendations?: string[];
  }
) {
  return apiRequest(API_ENDPOINTS.UPDATE_STRATEGY_SECTION(strategyId, sectionId), {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

// Optimize strategy
export async function optimizeStrategy(strategyId: string) {
  return apiRequest(API_ENDPOINTS.OPTIMIZE_STRATEGY(strategyId), {
    method: 'POST',
  });
}

// Export strategy
export async function exportStrategy(strategyId: string, format: 'markdown' | 'json' | 'pdf') {
  return apiRequest(API_ENDPOINTS.EXPORT_STRATEGY(strategyId, format));
}

// Get templates
export async function getStrategyTemplates() {
  return apiRequest(API_ENDPOINTS.GET_TEMPLATES);
}

// Retry utility for failed requests
export async function retryRequest<T>(
  requestFn: () => Promise<T>,
  maxRetries = 3,
  delay = 1000
): Promise<T> {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await requestFn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, delay * (i + 1)));
    }
  }
  throw new Error('Max retries exceeded');
}

// Health check for backend
export async function checkBackendHealth() {
  try {
    await apiRequest('/strategies/');
    return true;
  } catch {
    return false;
  }
}