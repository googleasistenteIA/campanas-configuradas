/**
 * GOOGLE AGENTES IA - DEMO FÉNIX BEACH CARTAGENA
 * Lógica principal de la aplicación web SPA.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de módulos
  initNavigation();
  initConstellation();
  initLiveActivityTicker();
  initDealsTable();
  initMissionCreator();
  initHotelSelector();
});

// State Management
let currentSelectedDeal = DEMO_DATA.closedDeals[0];

/* ==========================================================================
   1. NAVEGACIÓN Y ENRUTADOR DE VISTAS (13 MÓDULOS)
   ========================================================================== */
function initNavigation() {
  const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
  const viewSections = document.querySelectorAll('.view-section');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = item.getAttribute('data-view');
      if (!targetView) return;

      // Update Active Navigation Item
      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      // Update Visible View Section
      viewSections.forEach(sec => {
        if (sec.id === `view-${targetView}`) {
          sec.classList.add('active');
        } else {
          sec.classList.remove('active');
        }
      });

      // Render view-specific content if needed
      renderViewContent(targetView);
    });
  });
}

function renderViewContent(viewId) {
  if (viewId === 'mis-agentes') {
    renderMisAgentesView();
  } else if (viewId === 'oportunidades') {
    renderOportunidadesView();
  } else if (viewId === 'empresas') {
    renderEmpresasView();
  } else if (viewId === 'estrategias') {
    renderEstrategiasView();
  } else if (viewId === 'inteligencia') {
    renderInteligenciaView();
  } else if (viewId === 'resultados') {
    renderResultadosView();
  } else if (viewId === 'ajustes') {
    renderAjustesView();
  }
}

/* ==========================================================================
   2. CONSTELACIÓN CENTRAL DE AGENTES (SVG CONNECTORS)
   ========================================================================== */
function initConstellation() {
  const svgCanvas = document.getElementById('constellation-svg');
  const container = document.getElementById('constellation-container');
  if (!svgCanvas || !container) return;

  function drawLines() {
    svgCanvas.innerHTML = '';
    const centralNode = container.querySelector('.node-central');
    const orbitalNodes = container.querySelectorAll('.orbital-node');
    if (!centralNode) return;

    const cRect = centralNode.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const cX = cRect.left + cRect.width / 2 - containerRect.left;
    const cY = cRect.top + cRect.height / 2 - containerRect.top;

    orbitalNodes.forEach(node => {
      const nRect = node.getBoundingClientRect();
      const nX = nRect.left + nRect.width / 2 - containerRect.left;
      const nY = nRect.top + nRect.height / 2 - containerRect.top;
      const color = node.getAttribute('data-color') || '#3b82f6';

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', cX);
      line.setAttribute('y1', cY);
      line.setAttribute('x2', nX);
      line.setAttribute('y2', nY);
      line.setAttribute('stroke', color);
      line.setAttribute('stroke-width', '1.5');
      line.setAttribute('class', 'constellation-line');
      svgCanvas.appendChild(line);
    });
  }

  // Draw initially and on resize
  setTimeout(drawLines, 100);
  window.addEventListener('resize', drawLines);

  // Click on orbital nodes to view agent details
  const orbitalNodes = container.querySelectorAll('.orbital-node');
  orbitalNodes.forEach(node => {
    node.addEventListener('click', () => {
      const agentId = node.getAttribute('data-agent-id');
      const agent = DEMO_DATA.agents.find(a => a.id === agentId);
      if (agent) {
        showAgentModal(agent);
      }
    });
  });
}

function showAgentModal(agent) {
  alert(`🤖 AGENTE: ${agent.name}\nRol: ${agent.role}\nEstado: ${agent.status}\nTareas Activas: ${agent.activeTasks}\nEspecialidad: ${agent.specialty}\nActividad Reciente: ${agent.recentActivity}`);
}

/* ==========================================================================
   3. ACTIVIDAD EN TIEMPO REAL (TICKER SIMULADO)
   ========================================================================== */
function initLiveActivityTicker() {
  const feedContainer = document.getElementById('activity-feed-list');
  if (!feedContainer) return;

  renderLiveActivity();

  const sampleEvents = [
    { agent: 'Prospección IA', color: '#00F2FE', text: 'Optimizó palabras clave con piscina para Fénix Beach Club & Restaurante' },
    { agent: 'Convenios IA', color: '#F59E0B', text: 'Confirmó reserva Day Pass de grupo corporativo' },
    { agent: 'Comercial IA', color: '#10B981', text: 'Cerró reserva de Villa con Piscina (Producto Prioritario) en Hotel Fenix Beach' },
    { agent: 'Eventos IA', color: '#8B5CF6', text: 'Atendió solicitud de pasadía especial en zona de restaurante' },
    { agent: 'Recuperación IA', color: '#F97316', text: 'Reactivó cotización para estancia en Bungalow rodeado de naturaleza' },
    { agent: 'Analista IA', color: '#EC4899', text: 'Auditó concordancias: 0% de mezcla entre Pasadías y Hospedaje' }
  ];

  setInterval(() => {
    const randomEvent = sampleEvents[Math.floor(Math.random() * sampleEvents.length)];
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

    DEMO_DATA.liveActivity.unshift({
      time: timeStr,
      agent: randomEvent.agent,
      color: randomEvent.color,
      text: randomEvent.text
    });

    if (DEMO_DATA.liveActivity.length > 10) DEMO_DATA.liveActivity.pop();
    renderLiveActivity();
  }, 18000);
}

function renderLiveActivity() {
  const feedContainer = document.getElementById('activity-feed-list');
  if (!feedContainer) return;

  feedContainer.innerHTML = DEMO_DATA.liveActivity.map(act => `
    <div class="activity-item">
      <span class="activity-time">${act.time}</span>
      <span class="activity-agent-tag" style="color: ${act.color}">${act.agent}</span>
      <span class="activity-text" title="${act.text}">${act.text}</span>
    </div>
  `).join('');
}

/* ==========================================================================
   4. CREADOR DE NUEVA MISIÓN
   ========================================================================== */
function initMissionCreator() {
  const btnLaunch = document.getElementById('btn-launch-mission');
  const inputPrompt = document.getElementById('mission-prompt-input');

  if (!btnLaunch || !inputPrompt) return;

  btnLaunch.addEventListener('click', () => {
    const promptText = inputPrompt.value.trim();
    if (!promptText) {
      alert('Por favor escribe el objetivo de la misión.');
      return;
    }

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

    DEMO_DATA.liveActivity.unshift({
      time: timeStr,
      agent: 'DIRECTOR COMERCIAL IA',
      color: '#3b82f6',
      text: `Misión iniciada: "${promptText.substring(0, 30)}..."`
    });

    renderLiveActivity();
    inputPrompt.value = '';
    alert(`🚀 Misión registrada con éxito:\n\n"${promptText}"\n\nEl Director Comercial IA ha asignado tareas a los agentes correspondientes.`);
  });
}

/* ==========================================================================
   5. TABLA DE NEGOCIOS CERRADOS & DETALLE DEL NEGOCIO
   ========================================================================== */
function initDealsTable() {
  renderDealsTable();
  renderDealDetail(currentSelectedDeal);

  const hotelSelect = document.getElementById('filter-hotel-select');
  if (hotelSelect) {
    hotelSelect.addEventListener('change', () => {
      renderDealsTable();
    });
  }
}

function renderDealsTable() {
  const tbody = document.getElementById('deals-tbody');
  if (!tbody) return;

  const hotelFilter = document.getElementById('filter-hotel-select')?.value || 'all';

  let filteredDeals = DEMO_DATA.closedDeals;
  if (hotelFilter !== 'all') {
    filteredDeals = filteredDeals.filter(d => {
      if (d.propertyId) return d.propertyId === hotelFilter;
      if (hotelFilter === 'beach-club') return d.hotel.includes('Restaurante') || d.hotel.includes('Club');
      if (hotelFilter === 'hotel') return d.hotel.includes('Hotel Fenix');
      return true;
    });
  }

  tbody.innerHTML = filteredDeals.map(deal => {
    const isSelected = currentSelectedDeal && currentSelectedDeal.id === deal.id;
    const leaderAgentObj = DEMO_DATA.agents.find(a => a.name === deal.leaderAgent) || DEMO_DATA.agents[1];

    return `
      <tr class="${isSelected ? 'selected-row' : ''}" onclick="selectDeal('${deal.id}')">
        <td>
          <div class="company-cell">
            <div class="company-avatar-badge">${deal.company.substring(0,2).toUpperCase()}</div>
            <div>
              <div class="company-name-bold">${deal.company}</div>
              <div class="company-city-small">${deal.city}</div>
            </div>
          </div>
        </td>
        <td><strong style="color:#ffffff;">${deal.hotel}</strong></td>
        <td>${deal.service}</td>
        <td>${deal.closeDate}</td>
        <td class="deal-value-green">${deal.value}</td>
        <td>
          <span class="agent-leader-badge" style="color: ${leaderAgentObj.color}">
            ${deal.leaderAgent}
          </span>
        </td>
        <td><span style="color: #10b981; font-weight: 700;">${deal.roi}</span></td>
        <td><span class="material-symbols-outlined" style="font-size: 16px; color: #60a5fa;">visibility</span></td>
      </tr>
    `;
  }).join('');
}

window.selectDeal = function(dealId) {
  const deal = DEMO_DATA.closedDeals.find(d => d.id === dealId);
  if (deal) {
    currentSelectedDeal = deal;
    renderDealsTable();
    renderDealDetail(deal);
  }
};

function renderDealDetail(deal) {
  const container = document.getElementById('deal-detail-container');
  if (!container || !deal) return;

  const participantBadges = deal.participatingAgents.map(agName => {
    const agObj = DEMO_DATA.agents.find(a => a.name === agName) || { color: '#3b82f6' };
    return `<span style="display:inline-block; padding:2px 6px; background:rgba(255,255,255,0.06); border-radius:4px; font-size:9px; color:${agObj.color}; margin-right:4px; margin-bottom:4px;">${agName}</span>`;
  }).join('');

  const timelineItems = deal.timeline.map(item => `
    <div class="timeline-step-item">
      <div class="timeline-date">${item.date} • <strong style="color: #60a5fa;">${item.agent}</strong></div>
      <div class="timeline-text">${item.text}</div>
    </div>
  `).join('');

  container.innerHTML = `
    <div>
      <div class="detail-header-tag">
        <span class="detail-title-label">DETALLE DEL NEGOCIO CERRADO</span>
        <span class="won-status-pill">${deal.badge}</span>
      </div>

      <div class="detail-company-box">
        <div class="detail-avatar-large">${deal.company.substring(0,2).toUpperCase()}</div>
        <div>
          <div class="detail-company-title">${deal.company}</div>
          <div class="detail-company-city">${deal.city}</div>
        </div>
      </div>

      <div style="font-size: 10px; color: var(--text-muted); text-transform: uppercase;">PROPIEDAD / MARCA</div>
      <div style="font-size: 12px; font-weight: 700; color: #60a5fa; margin-bottom: 8px;">${deal.hotel}</div>

      <div style="font-size: 10px; color: var(--text-muted); text-transform: uppercase;">SERVICIO CONTRATADO</div>
      <div style="font-size: 12px; font-weight: 700; color: #ffffff; margin-bottom: 8px;">✔ ${deal.service}</div>

      <div style="font-size: 10px; color: var(--text-muted); text-transform: uppercase;">VALOR FACTURADO</div>
      <div class="detail-big-price">${deal.value}</div>

      <div class="detail-stats-grid">
        <div class="detail-stat-item">
          <span class="detail-stat-label">FECHA CIERRE</span>
          <span class="detail-stat-val">${deal.closeDate}</span>
        </div>
        <div class="detail-stat-item">
          <span class="detail-stat-label">DURACIÓN</span>
          <span class="detail-stat-val">${deal.duration}</span>
        </div>
        <div class="detail-stat-item">
          <span class="detail-stat-label">TIPO</span>
          <span class="detail-stat-val">${deal.nights}</span>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 10px;">
        <div>
          <span style="color: var(--text-muted);">AGENTE LÍDER:</span><br>
          <strong style="color: #60a5fa;">${deal.leaderAgent}</strong>
        </div>
        <div>
          <span style="color: var(--text-muted);">ROI ESTIMADO:</span><br>
          <strong style="color: #10b981;">${deal.roi}</strong>
        </div>
      </div>

      <div style="margin-bottom: 12px;">
        <span style="font-size: 9.5px; color: var(--text-muted); text-transform: uppercase;">AGENTES PARTICIPANTES:</span><br>
        <div style="margin-top: 4px;">${participantBadges}</div>
      </div>

      <div class="detail-summary-box">
        <div class="summary-title">RESUMEN DE LA OPORTUNIDAD</div>
        <div class="summary-body">${deal.summary}</div>
      </div>

      <div class="timeline-section-title">LÍNEA DE TIEMPO DEL NEGOCIO</div>
      <div class="vertical-timeline">
        ${timelineItems}
      </div>
    </div>

    <button class="btn-full-report" onclick="alert('Generando reporte ejecutivo para ${deal.company}...')">
      <span class="material-symbols-outlined" style="font-size: 16px;">description</span>
      Ver reporte completo
    </button>
  `;
}

/* ==========================================================================
   6. HOTEL SELECTOR HANDLER
   ========================================================================== */
function initHotelSelector() {
  const select = document.getElementById('header-hotel-select');
  const filterSelect = document.getElementById('filter-hotel-select');
  if (!select) return;

  select.addEventListener('change', (e) => {
    const val = e.target.value;
    if (filterSelect) {
      filterSelect.value = val;
      renderDealsTable();
    }
    const activeView = document.querySelector('.view-section.active')?.id?.replace('view-', '');
    if (activeView) renderViewContent(activeView);
  });
}

/* ==========================================================================
   7. VISTAS Y MÓDULOS DE CAMPAÑAS GOOGLE ADS
   ========================================================================== */

function renderMisAgentesView() {
  const container = document.getElementById('mis-agentes-grid');
  if (!container) return;

  container.innerHTML = DEMO_DATA.agents.map(ag => `
    <div style="background: var(--bg-card); border: 1px solid var(--border-card); border-radius: var(--radius-lg); padding: 18px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--shadow-card);">
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
          <div style="width: 36px; height: 36px; border-radius: 50%; background: ${ag.color}22; color: ${ag.color}; display: flex; align-items: center; justify-content: center;">
            <span class="material-symbols-outlined">${ag.icon}</span>
          </div>
          <span style="background: rgba(16,185,129,0.15); color: #34d399; font-size: 9px; font-weight: 800; padding: 2px 8px; border-radius: 99px;">${ag.status}</span>
        </div>
        <h3 style="font-size: 15px; font-weight: 700; color: #ffffff;">${ag.name}</h3>
        <p style="font-size: 11px; color: ${ag.color}; font-weight: 600; margin-bottom: 8px;">${ag.role}</p>
        <p style="font-size: 11px; color: var(--text-sub); line-height: 1.3; margin-bottom: 12px;">${ag.description}</p>
      </div>
      <div style="border-top: 1px solid var(--border-subtle); padding-top: 10px; font-size: 10.5px; color: var(--text-muted);">
        <div><strong>Tareas activas:</strong> ${ag.activeTasks}</div>
        <div><strong>Especialidad:</strong> ${ag.specialty}</div>
      </div>
    </div>
  `).join('');
}

function renderOportunidadesView() {
  const container = document.getElementById('oportunidades-pipeline-grid');
  if (!container) return;

  const currentProperty = document.getElementById('header-hotel-select')?.value || 'all';
  let list = DEMO_DATA.opportunities;
  if (currentProperty === 'beach-club') {
    list = list.filter(o => o.property.includes('Restaurante') || o.property.includes('Club'));
  } else if (currentProperty === 'hotel') {
    list = list.filter(o => o.property.includes('Hotel Fenix'));
  }

  container.innerHTML = list.map(opp => `
    <div style="background: var(--bg-card); border: 1px solid var(--border-card); border-radius: var(--radius-md); padding: 14px; box-shadow: var(--shadow-card);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
        <span style="font-size: 12px; font-weight: 700; color: #ffffff;">${opp.company}</span>
        <span style="background: #3b82f622; color: #60a5fa; font-size: 9px; font-weight: 700; padding: 2px 6px; border-radius: 4px;">${opp.stage}</span>
      </div>
      <div style="font-size: 10px; color: #60a5fa; margin-bottom: 4px;">${opp.property}</div>
      <div style="font-size: 14px; font-weight: 800; color: var(--color-success); margin-bottom: 8px;">${opp.value}</div>
      <div style="font-size: 10px; color: var(--text-muted);">Probabilidad: ${opp.probability} | Ciudad: ${opp.city}</div>
    </div>
  `).join('');
}

function renderEmpresasView() {
  const container = document.getElementById('empresas-list-container');
  if (!container) return;

  const sampleCompanies = [
    { name: 'Grupo Empresarial Deloitte', sector: 'Servicios Corporativos', city: 'Bogotá', potential: 'Alto (Pasadías Grupo)', status: 'Cliente Activo Pasadías' },
    { name: 'Familia Mendoza / Grupo Privado', sector: 'Turismo VIP', city: 'Medellín', potential: 'Alto (Villas con Piscina)', status: 'Cliente Activo Hotel' },
    { name: 'TechSolutions Latam', sector: 'Tecnología', city: 'Cali', potential: 'Alto (Bungalows Naturaleza)', status: 'Cliente Activo Hotel' },
    { name: 'Salud & Vida IPS', sector: 'Salud', city: 'Bogotá', potential: 'Medio-Alto (Pasadías Integración)', status: 'Cliente Activo Pasadías' },
    { name: 'Agencia Viajes Caribe Top', sector: 'Turismo & Agencias', city: 'Barranquilla', potential: 'Alto (Hospedaje General)', status: 'Cliente Activo Hotel' }
  ];

  container.innerHTML = `
    <table class="custom-deals-table">
      <thead>
        <tr>
          <th>Empresa / Cliente</th>
          <th>Sector</th>
          <th>Ciudad</th>
          <th>Potencial Comercial</th>
          <th>Estado en Panel</th>
        </tr>
      </thead>
      <tbody>
        ${sampleCompanies.map(c => `
          <tr>
            <td><strong style="color: #ffffff;">${c.name}</strong></td>
            <td>${c.sector}</td>
            <td>${c.city}</td>
            <td><span style="color: #10b981; font-weight: 700;">${c.potential}</span></td>
            <td><span style="background: rgba(16,185,129,0.15); color: #34d399; padding: 2px 8px; border-radius: 99px; font-size: 9.5px; font-weight: 700;">${c.status}</span></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

// Vista Estrategias (Google Ads Campaign Dashboard)
function renderEstrategiasView() {
  const container = document.getElementById('estrategias-container');
  if (!container) return;

  const currentProp = document.getElementById('header-hotel-select')?.value || 'all';

  let campaignsToRender = DEMO_DATA.campaigns;
  if (currentProp !== 'all') {
    campaignsToRender = campaignsToRender.filter(c => c.propertyId === currentProp);
  }

  container.innerHTML = campaignsToRender.map(c => {
    let adGroupsHTML = '';

    if (c.propertyId === 'beach-club') {
      adGroupsHTML = c.adGroups.map(ag => `
        <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <h4 style="font-size: 14px; font-weight: 700; color: #00F2FE;">${ag.name}</h4>
            <span style="background: rgba(0,242,254,0.15); color: #00F2FE; font-size: 9px; font-weight: 800; padding: 2px 8px; border-radius: 4px;">CONCORDANCIA: ${ag.matchType}</span>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 10px; color: var(--text-muted); text-transform: uppercase; margin-bottom: 6px;">PALABRAS CLAVE DEL GRUPO (PLAYA + PISCINA + PASADÍAS):</div>
            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
              ${ag.keywords.map(kw => `<span style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 4px 8px; border-radius: 4px; font-size: 11px; color: #e2e8f0; font-family: monospace;">+ ${kw.text}</span>`).join('')}
            </div>
          </div>

          <div style="background: rgba(255,255,255,0.03); border-left: 3px solid #00F2FE; padding: 10px 12px; border-radius: 0 4px 4px 0;">
            <div style="font-size: 10px; color: var(--text-muted); text-transform: uppercase;">ANUNCIO DE BÚSQUEDA ADAPTATIVO</div>
            <div style="font-size: 12px; font-weight: 700; color: #60a5fa; margin-top: 2px;">${ag.ad.headline1} | ${ag.ad.headline2}</div>
            <div style="font-size: 11px; color: var(--text-sub); margin-top: 4px;">${ag.ad.description}</div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 6px;">
              <span style="font-size: 10px; color: #10b981; font-weight: 700;">CTA: ${ag.ad.cta}</span>
              <span style="font-size: 10px; color: var(--text-muted);">${ag.ad.url}</span>
            </div>
          </div>
        </div>
      `).join('');
    } else if (c.propertyId === 'hotel') {
      adGroupsHTML = c.strategicProducts.map(sp => `
        <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <h4 style="font-size: 14px; font-weight: 700; color: #F59E0B;">${sp.name}</h4>
            <span style="background: rgba(245,158,11,0.15); color: #F59E0B; font-size: 9px; font-weight: 800; padding: 2px 8px; border-radius: 4px;">${sp.typeBadge}</span>
          </div>

          <p style="font-size: 11px; color: var(--text-sub); line-height: 1.4; margin-bottom: 12px;">${sp.focusText}</p>

          <div style="margin-bottom: 12px;">
            <div style="font-size: 10px; color: var(--text-muted); text-transform: uppercase; margin-bottom: 6px;">PALABRAS CLAVE OBJETIVO:</div>
            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
              ${sp.keywords.map(kw => `<span style="background: rgba(245,158,11,0.08); border: 1px solid rgba(245,158,11,0.2); padding: 4px 8px; border-radius: 4px; font-size: 11px; color: #fef08a; font-family: monospace;">+ ${kw}</span>`).join('')}
            </div>
          </div>

          <div style="background: rgba(255,255,255,0.03); border-left: 3px solid #F59E0B; padding: 10px 12px; border-radius: 0 4px 4px 0;">
            <div style="font-size: 10px; color: var(--text-muted); text-transform: uppercase;">ANUNCIO DE BÚSQUEDA ASOCIADO</div>
            <div style="font-size: 12px; font-weight: 700; color: #fbbf24; margin-top: 2px;">${sp.ad.headline1} | ${sp.ad.headline2}</div>
            <div style="font-size: 11px; color: var(--text-sub); margin-top: 4px;">${sp.ad.description}</div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 6px;">
              <span style="font-size: 10px; color: #10b981; font-weight: 700;">CTA: ${sp.ad.cta}</span>
              <span style="font-size: 10px; color: var(--text-muted);">${sp.ad.url}</span>
            </div>
          </div>
        </div>
      `).join('');
    }

    return `
      <div style="background: var(--bg-card); border: 1px solid var(--border-card); border-radius: var(--radius-lg); padding: 20px; margin-bottom: 24px; box-shadow: var(--shadow-card);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <div>
            <span style="background: #3b82f622; color: #60a5fa; font-size: 9px; font-weight: 800; padding: 3px 8px; border-radius: 99px;">${c.badge}</span>
            <h3 style="font-size: 17px; font-weight: 800; color: #ffffff; margin-top: 6px;">${c.propertyName}</h3>
            <p style="font-size: 11px; color: var(--text-muted);">${c.campaignName}</p>
          </div>
          <div style="text-align: right;">
            <span style="background: rgba(16,185,129,0.15); color: #34d399; font-size: 10px; font-weight: 800; padding: 4px 10px; border-radius: 99px;">ESTADO: ${c.status}</span>
            <div style="font-size: 11px; color: #ffffff; font-weight: 700; margin-top: 6px;">Presupuesto Mensual: ${c.monthlyBudget}</div>
          </div>
        </div>

        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); padding: 12px 16px; border-radius: var(--radius-md); margin-bottom: 16px; font-size: 11.5px; color: var(--text-sub);">
          <strong>ENFOQUE ESTRATÉGICO:</strong> ${c.focus}<br>
          <strong style="color: #ef4444;">REGLA DE AISLAMIENTO:</strong> ${c.exclusivityRule}
        </div>

        ${adGroupsHTML}
      </div>
    `;
  }).join('');
}

// Vista Inteligencia Comercial
function renderInteligenciaView() {
  const container = document.getElementById('inteligencia-container');
  if (!container) return;

  container.innerHTML = `
    <div style="background: var(--bg-card); border: 1px solid var(--border-card); border-radius: var(--radius-lg); padding: 20px; box-shadow: var(--shadow-card);">
      <h3 style="font-size: 16px; font-weight: 700; color: #ffffff; margin-bottom: 14px;">Auditoría de Intención de Búsqueda y Separación Estricta</h3>
      <p style="font-size: 12px; color: var(--text-sub); margin-bottom: 20px; line-height: 1.4;">
        El motor de Inteligencia Comercial de Google Agentes IA garantiza la exclusión mutua de términos entre ambas propiedades para maximizar la calidad del tráfico y evitar conversiones cruzadas.
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 16px;">
        <div style="background: rgba(0,242,254,0.04); border: 1px solid rgba(0,242,254,0.2); border-radius: var(--radius-md); padding: 16px;">
          <h4 style="font-size: 14px; font-weight: 700; color: #00F2FE; margin-bottom: 8px;">Fénix Beach Club & Restaurante Cartagena</h4>
          <p style="font-size: 11px; color: var(--text-sub); margin-bottom: 10px;">Enfoque: Pasadías, playa, piscina, restaurante y gastronomía de día.</p>
          <div style="font-size: 10px; color: #10b981; font-weight: 700; margin-bottom: 6px;">PALABRAS CLAVE POSITIVAS ACTIVAS (10 COMBINACIONES CON PISCINA):</div>
          <ul style="font-size: 11px; color: var(--text-sub); margin-left: 16px; line-height: 1.5; margin-bottom: 12px;">
            <li>pasadía playa Cartagena</li>
            <li>pasadía con piscina Cartagena</li>
            <li>beach club con piscina Cartagena</li>
            <li>playa y piscina Cartagena</li>
            <li>restaurante con piscina Cartagena</li>
            <li>pasadía playa y piscina</li>
            <li>piscina frente al mar Cartagena</li>
            <li>beach club Cartagena</li>
            <li>plan de día con piscina Cartagena</li>
            <li>día de playa y piscina Cartagena</li>
          </ul>
          <div style="font-size: 10px; color: #ef4444; font-weight: 700; margin-bottom: 4px;">PALABRAS CLAVE NEGATIVAS (EXCLUIDAS):</div>
          <div style="font-size: 10px; color: var(--text-muted); font-family: monospace;">-habitacion -hotel -noche -hospedaje -alojamiento -villas -bungalows</div>
        </div>

        <div style="background: rgba(245,158,11,0.04); border: 1px solid rgba(245,158,11,0.2); border-radius: var(--radius-md); padding: 16px;">
          <h4 style="font-size: 14px; font-weight: 700; color: #F59E0B; margin-bottom: 8px;">Hotel Fenix Beach Cartagena</h4>
          <p style="font-size: 11px; color: var(--text-sub); margin-bottom: 10px;">Enfoque: Hospedaje, habitaciones, estadías de noche y aloja miento.</p>
          <div style="font-size: 10px; color: #10b981; font-weight: 700; margin-bottom: 6px;">PRODUCTOS Y TERMINOS ACTIVOS:</div>
          <ul style="font-size: 11px; color: var(--text-sub); margin-left: 16px; line-height: 1.5; margin-bottom: 12px;">
            <li><strong>1. Villas con Piscina (Prioritario):</strong> privacidad, amplitud, piscina privada.</li>
            <li><strong>2. Bungalows en la Naturaleza (Diferenciador):</strong> alojamiento ecológico, tranquilidad.</li>
            <li><strong>3. Hospedaje General:</strong> hotel, habitaciones, estadías.</li>
          </ul>
          <div style="font-size: 10px; color: #ef4444; font-weight: 700; margin-bottom: 4px;">PALABRAS CLAVE NEGATIVAS (EXCLUIDAS):</div>
          <div style="font-size: 10px; color: var(--text-muted); font-family: monospace;">-pasadia -daypass -dia -solodiario -restaurantesinreserva</div>
        </div>
      </div>
    </div>
  `;
}

// Vista Resultados
function renderResultadosView() {
  const container = document.getElementById('resultados-container');
  if (!container) return;

  container.innerHTML = `
    <div style="background: var(--bg-card); border: 1px solid var(--border-card); border-radius: var(--radius-lg); padding: 20px; box-shadow: var(--shadow-card);">
      <h3 style="font-size: 16px; font-weight: 700; color: #ffffff; margin-bottom: 16px;">Rendimiento de Inversión Publicitaria por Propiedad</h3>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 20px;">
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); padding: 16px; border-radius: var(--radius-md);">
          <div style="font-size: 11px; color: #00F2FE; font-weight: 800;">FÉNIX BEACH CLUB & RESTAURANTE</div>
          <div style="font-size: 22px; font-weight: 800; color: #ffffff; margin: 6px 0;">ROAS: 5.8x</div>
          <div style="font-size: 11px; color: var(--text-sub);">Conversiones: 312 Pasadías / Day Pass</div>
          <div style="font-size: 11px; color: #10b981; margin-top: 4px;">CTR Medio: 4.8% | CPC: $1.250 COP</div>
        </div>

        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); padding: 16px; border-radius: var(--radius-md);">
          <div style="font-size: 11px; color: #F59E0B; font-weight: 800;">HOTEL FENIX BEACH CARTAGENA</div>
          <div style="font-size: 22px; font-weight: 800; color: #ffffff; margin: 6px 0;">ROAS: 6.4x</div>
          <div style="font-size: 11px; color: var(--text-sub);">Conversiones: 116 Reservas de Hospedaje</div>
          <div style="font-size: 11px; color: #10b981; margin-top: 4px;">CTR Medio: 5.2% | CPC: $1.850 COP</div>
        </div>
      </div>
    </div>
  `;
}

// Vista Ajustes
function renderAjustesView() {
  const container = document.getElementById('ajustes-container');
  if (!container) return;

  container.innerHTML = `
    <div style="background: var(--bg-card); border: 1px solid var(--border-card); border-radius: var(--radius-lg); padding: 20px; box-shadow: var(--shadow-card);">
      <h3 style="font-size: 16px; font-weight: 700; color: #ffffff; margin-bottom: 12px;">Configuración del Entorno de Demostración</h3>
      <p style="font-size: 12px; color: var(--text-sub); margin-bottom: 16px;">
        Entorno configurado exclusivamente para la gestión de campañas de Google Ads de Fénix Beach Cartagena.
      </p>

      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 600px;">
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); padding: 12px; border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-size: 12px; font-weight: 700; color: #ffffff;">Cliente Oficial</div>
            <div style="font-size: 11px; color: var(--text-sub);">Fénix Beach Cartagena</div>
          </div>
          <span style="background: rgba(16,185,129,0.15); color: #34d399; font-size: 9px; font-weight: 800; padding: 2px 8px; border-radius: 99px;">ACTIVO</span>
        </div>

        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); padding: 12px; border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-size: 12px; font-weight: 700; color: #ffffff;">Separación Estricta de Propiedades</div>
            <div style="font-size: 11px; color: var(--text-sub);">Beach Club & Restaurante vs Hotel Hospedaje</div>
          </div>
          <span style="background: rgba(16,185,129,0.15); color: #34d399; font-size: 9px; font-weight: 800; padding: 2px 8px; border-radius: 99px;">VERIFICADO 100%</span>
        </div>
      </div>
    </div>
  `;
}
