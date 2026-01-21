-- ============================================================================
-- DEMAND LEADS TABLE
-- Stores leads from the public AI Visibility Report landing page
-- ============================================================================

CREATE TABLE demand_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  care_home_name TEXT NOT NULL,
  town TEXT NOT NULL,
  county TEXT NOT NULL,
  email TEXT NOT NULL,
  care_types TEXT[] NOT NULL,
  report_generated BOOLEAN DEFAULT FALSE,
  scores JSONB,
  pdf_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  contacted BOOLEAN DEFAULT FALSE
);

-- Index for finding unconverted leads
CREATE INDEX idx_demand_leads_contacted ON demand_leads(contacted, created_at);

-- Index for email lookups (prevent duplicate reports)
CREATE INDEX idx_demand_leads_email ON demand_leads(email);

-- Index for finding leads by care home
CREATE INDEX idx_demand_leads_care_home ON demand_leads(care_home_name, town);

-- Row Level Security (RLS)
ALTER TABLE demand_leads ENABLE ROW LEVEL SECURITY;

-- Policy: Service role can do everything (for API routes)
CREATE POLICY "Service role full access" ON demand_leads
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

COMMENT ON TABLE demand_leads IS 'Leads captured from the Maxxo Demand AI Visibility Report landing page';
COMMENT ON COLUMN demand_leads.care_types IS 'Array of care types offered: residential, dementia, nursing, respite';
COMMENT ON COLUMN demand_leads.scores IS 'JSON object containing AI platform visibility scores';
COMMENT ON COLUMN demand_leads.contacted IS 'Whether the lead has been contacted for follow-up';
