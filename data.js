/**
 * GOOGLE AGENTES IA - DEMO FÉNIX BEACH CARTAGENA
 * Base de datos simulada y estado global de la aplicación.
 */

const DEMO_DATA = {
  // Datos del Cliente en Demostración
  client: {
    name: 'FÉNIX BEACH CARTAGENA',
    environment: 'PANEL DE CAMPAÑAS GOOGLE ADS',
    userRole: 'Growth Partner / Ads Specialist',
    userTitle: 'Administrador de Campañas',
    properties: [
      { id: 'all', name: 'Todas las propiedades' },
      { id: 'beach-club', name: 'Fénix Beach Club & Restaurante Cartagena' },
      { id: 'hotel', name: 'Hotel Fenix Beach Cartagena' }
    ]
  },

  // Agentes del Sistema (Director Comercial IA + 6 Especialistas)
  agents: [
    {
      id: 'director',
      name: 'DIRECTOR COMERCIAL IA',
      role: 'Orquestador Principal',
      status: 'ACTIVO',
      color: '#3B82F6',
      colorClass: 'agent-director',
      icon: 'psychology',
      shortFunc: 'Coordinación estratégica de campañas Google Ads y ventas.',
      description: 'Supervisa el rendimiento de las campañas de Google Ads, coordina la aceleración de conversiones y garantiza la separación estratégica entre pasadías y hospedaje.',
      activeTasks: 14,
      specialty: 'Orquestación de Ads & Estrategia Multipropiedad',
      recentActivity: 'Optimizando presupuesto diario entre Campaña Pasadías y Campaña Hospedaje.',
      participatingDealsCount: 27
    },
    {
      id: 'prospeccion',
      name: 'PROSPECCIÓN IA',
      role: 'Indexación & Keyword Scoring',
      status: 'ACTIVO',
      color: '#00F2FE',
      colorClass: 'agent-prospeccion',
      icon: 'search',
      shortFunc: 'Búsqueda y análisis continuo de palabras clave de alta conversión.',
      description: 'Identifica intenciones de búsqueda de pasadías con piscina/playa e intenciones de reservas directas de hospedaje.',
      activeTasks: 8,
      specialty: 'Keyword Mining & Intención de Búsqueda',
      recentActivity: 'Agregó 10 combinaciones con piscina para Fénix Beach Club & Restaurante.',
      participatingDealsCount: 19
    },
    {
      id: 'convenios',
      name: 'CONVENIOS IA',
      role: 'Day Pass & Alianzas',
      status: 'ACTIVO',
      color: '#F59E0B',
      colorClass: 'agent-convenios',
      icon: 'handshake',
      shortFunc: 'Gestión de acuerdos corporativos de pasadías y grupos.',
      description: 'Estructura planes de pasadías empresariales para Fénix Beach Club & Restaurante Cartagena.',
      activeTasks: 5,
      specialty: 'Day Pass Corporativo & Eventos de Día',
      recentActivity: 'Cerró acuerdo de Day Pass para 45 ejecutivos de Alianza Logística.',
      participatingDealsCount: 15
    },
    {
      id: 'comercial',
      name: 'COMERCIAL IA',
      role: 'Atención & Conversión Ads',
      status: 'ACTIVO',
      color: '#10B981',
      colorClass: 'agent-comercial',
      icon: 'trending_up',
      shortFunc: 'Seguimiento de leads recibidos desde Google Ads.',
      description: 'Responde solicitudes de pasadías y reservas directas de habitaciones, villas con piscina y bungalows.',
      activeTasks: 9,
      specialty: 'Cierre de Reservas & Respuestas Inmediatas',
      recentActivity: 'Confirmó reserva de Villa con Piscina para cliente de Bogotá.',
      participatingDealsCount: 22
    },
    {
      id: 'eventos',
      name: 'EVENTOS IA',
      role: 'Experiencias de Día & Celebraciones',
      status: 'ACTIVO',
      color: '#8B5CF6',
      colorClass: 'agent-eventos',
      icon: 'event',
      shortFunc: 'Gestión de celebraciones de día y experiencias en playa/piscina.',
      description: 'Atiende solicitudes de grupos para pasadías de aniversario, cumpleaños y eventos de día en restaurante.',
      activeTasks: 6,
      specialty: 'Eventos de Día & Reservas de Grupo',
      recentActivity: 'Cotizó celebración de día con pasadía completo para 30 personas.',
      participatingDealsCount: 12
    },
    {
      id: 'recuperacion',
      name: 'RECUPERACIÓN IA',
      role: 'Re-engagement de Leads',
      status: 'ACTIVO',
      color: '#F97316',
      colorClass: 'agent-recuperacion',
      icon: 'autorenew',
      shortFunc: 'Reactivación de carritos abandonados y cotizaciones frías.',
      description: 'Envía incentivos y recordatorios a usuarios que cotizaron pasadías o reservas de hospedaje.',
      activeTasks: 4,
      specialty: 'Recuperación de Reservas Pausadas',
      recentActivity: 'Reactivó reserva de estancia en Bungalow rodeado de naturaleza.',
      participatingDealsCount: 8
    },
    {
      id: 'analista',
      name: 'ANALISTA IA',
      role: 'Analítica de Ads & ROAS',
      status: 'ACTIVO',
      color: '#EC4899',
      colorClass: 'agent-analista',
      icon: 'analytics',
      shortFunc: 'Medición de CTR, CPC y ROI por campaña publicitaria.',
      description: 'Audita que los términos de hospedaje no se mezclen con los de pasadías y analiza el rendimiento del gasto publicitario.',
      activeTasks: 7,
      specialty: 'ROAS Optimization & Auditoría de Negativas',
      recentActivity: 'Confirmó 0% de concordancia cruzada entre campañas de pasadías y hotel.',
      participatingDealsCount: 25
    }
  ],

  // Métricas Comerciales Principales
  metrics: {
    empresasAnalizadas: { value: '2.450', trend: '↑ 24% vs mes anterior', positive: true },
    oportunidadesActivas: { value: '428', trend: '↑ 31% vs mes anterior', positive: true },
    enNegociacion: { value: '64', trend: '↑ 19% vs mes anterior', positive: true },
    reunionesProgramadas: { value: '32', trend: '↑ 28% vs mes anterior', positive: true },
    negociosCerrados: { value: '54', trend: '↑ 45% vs mes anterior', positive: true },
    valorFacturado: { value: '$ 148.200.000 COP', trend: '↑ 41% vs mes anterior', positive: true },
    tasaConversion: { value: '21.4%', trend: '↑ 4.1 pp vs mes anterior', positive: true }
  },

  // Estructura de Campañas de Google Ads
  campaigns: [
    {
      id: 'campaign-beach-club',
      propertyId: 'beach-club',
      propertyName: 'Fénix Beach Club & Restaurante Cartagena',
      campaignName: 'GOOGLE ADS — PASADÍAS, PLAYA, PISCINA & GASTRONOMÍA 2026',
      badge: 'PROPIEDAD PASADÍAS',
      status: 'ACTIVA',
      dailyBudget: '$ 350.000 COP',
      monthlyBudget: '$ 10.500.000 COP',
      focus: 'Pasadías, Day Pass, Playa, Piscina frente al mar, Restaurante y Gastronomía de día. Exclusivo de experiencias sin hospedaje.',
      targetAudience: 'Turistas y locales en Cartagena buscando pasadía de playa, acceso a piscina, gastronomía caribeña y lounge de día.',
      exclusivityRule: 'CERO términos de hospedaje, habitaciones, noches o villas. 100% Pasadías & Restaurante.',
      adGroups: [
        {
          id: 'ag-pasadias-piscina',
          name: 'GRUPO 1: Pasadías, Playa & Piscina (Palabras Clave Reforzadas)',
          status: 'ACTIVO',
          matchType: 'Frase / Exacta',
          keywords: [
            { text: 'pasadía playa Cartagena', status: 'Alta Conversión' },
            { text: 'pasadía con piscina Cartagena', status: 'Alta Conversión' },
            { text: 'beach club con piscina Cartagena', status: 'Alta Conversión' },
            { text: 'playa y piscina Cartagena', status: 'Alta Conversión' },
            { text: 'restaurante con piscina Cartagena', status: 'Alta Conversión' },
            { text: 'pasadía playa y piscina', status: 'Alta Conversión' },
            { text: 'piscina frente al mar Cartagena', status: 'Alta Conversión' },
            { text: 'beach club Cartagena', status: 'Alta Conversión' },
            { text: 'plan de día con piscina Cartagena', status: 'Alta Conversión' },
            { text: 'día de playa y piscina Cartagena', status: 'Alta Conversión' }
          ],
          ad: {
            headline1: 'Fénix Beach Club & Restaurante Cartagena',
            headline2: 'Pasadía con Piscina & Playa',
            headline3: 'Gastronomía Caribeña frente al Mar',
            description: 'Disfruta el mejor pasadía en Cartagena. Incluye lancha, piscina frente al mar, camas de playa y consumo en restaurante. ¡Reserva tu Day Pass!',
            cta: 'Reservar Pasadía / Day Pass',
            url: 'https://fenixbeachcartagena.com/pasadias'
          }
        },
        {
          id: 'ag-restaurante-playa',
          name: 'GRUPO 2: Restaurante de Playa & Gastronomía frente al Mar',
          status: 'ACTIVO',
          matchType: 'Frase / Exacta',
          keywords: [
            { text: 'restaurante con piscina Cartagena', status: 'Alta Conversión' },
            { text: 'restaurante de playa Cartagena', status: 'Alta Conversión' },
            { text: 'almuerzo frente al mar Cartagena', status: 'Alta Conversión' },
            { text: 'gastronomía caribeña playa', status: 'Alta Conversión' }
          ],
          ad: {
            headline1: 'Restaurante Fénix Beach Cartagena',
            headline2: 'Cocina de Mar & Piscina',
            headline3: 'Experiencia Gastronómica de Día',
            description: 'Saborea la exquisita gastronomía caribeña en nuestro restaurante con piscina al mar. Reserva tu mesa y pasadía de día.',
            cta: 'Ver Menú & Reservar',
            url: 'https://fenixbeachcartagena.com/restaurante'
          }
        }
      ]
    },
    {
      id: 'campaign-hotel',
      propertyId: 'hotel',
      propertyName: 'Hotel Fenix Beach Cartagena',
      campaignName: 'GOOGLE ADS — HOSPEDAJE, VILLAS & BUNGALOWS 2026',
      badge: 'PROPIEDAD HOSPEDAJE',
      status: 'ACTIVA',
      dailyBudget: '$ 450.000 COP',
      monthlyBudget: '$ 13.500.000 COP',
      focus: 'Hospedaje, Habitaciones, Estadías, Hotel, Alojamiento, Villas con Piscina y Bungalows rodeados de Naturaleza.',
      targetAudience: 'Viajeros nacionales e internacionales buscando estadías exclusivas en la isla/playa en Cartagena.',
      exclusivityRule: 'CERO pasadías o consumo diario exclusivo. 100% Hospedaje & Estadías.',
      strategicProducts: [
        {
          id: 'prod-villas',
          typeBadge: 'PRODUCTO PRIORITARIO',
          name: '1. Villas con Piscina — Producto Prioritario',
          focusText: 'Destacar las Villas con piscina como uno de los principales productos de la campaña de hospedaje. Enfoque: Villas con piscina, privacidad, mayor espacio, exclusividad y comodidad para familias, parejas o grupos.',
          keywords: [
            'villas con piscina Cartagena',
            'villa privada Fenix Beach',
            'alojamiento con piscina privada',
            'villa frente al mar Cartagena'
          ],
          ad: {
            headline1: 'Villas con Piscina — Hotel Fenix Beach',
            headline2: 'Privacidad & Exclusividad Total',
            headline3: 'Ideal Parejas, Familias y Grupos',
            description: 'Hospédate en nuestras Villas con piscina privada frente al mar en Cartagena. Privacidad, máxima comodidad y el mejor servicio hotelero.',
            cta: 'Reservar Villa con Piscina',
            url: 'https://fenixbeachcartagena.com/villas-con-piscina'
          }
        },
        {
          id: 'prod-bungalows',
          typeBadge: 'PRODUCTO DIFERENCIADOR',
          name: '2. Bungalows rodeados de Naturaleza — Producto Diferenciador',
          focusText: 'Destacar los Bungalows como una experiencia diferenciadora del Hotel. Enfoque: Bungalows, alojamiento rodeado de naturaleza, tranquilidad, experiencia diferente de hospedaje, escapadas y estadías.',
          keywords: [
            'bungalows Cartagena',
            'bungalows en la naturaleza',
            'alojamiento bungalow playa',
            'escapada naturaleza Fenix Beach'
          ],
          ad: {
            headline1: 'Bungalows en la Naturaleza — Fenix Beach',
            headline2: 'Experiencia Hotelera Diferenciadora',
            headline3: 'Tranquilidad & Escapadas de Mar',
            description: 'Descubre nuestros Bungalows rodeados de exuberante naturaleza. Una experiencia única de alojamiento y relajación frente al mar en Cartagena.',
            cta: 'Reservar Bungalow',
            url: 'https://fenixbeachcartagena.com/bungalows'
          }
        },
        {
          id: 'prod-general',
          typeBadge: 'HOSPEDAJE GENERAL',
          name: '3. Hospedaje General',
          focusText: 'Mantener la estrategia general de Hotel Fenix Beach Cartagena para búsquedas relacionadas con hotel, hospedaje, habitaciones, alojamiento y estadías.',
          keywords: [
            'hotel Fenix Beach Cartagena',
            'hospedaje Tierra Bomba',
            'reserva hotel playa Cartagena',
            'habitaciones hotel Cartagena'
          ],
          ad: {
            headline1: 'Hotel Fenix Beach Cartagena',
            headline2: 'Hospedaje & Estadías de Playa',
            headline3: 'Habitaciones & Suites Frente al Mar',
            description: 'Reserva tu estancia en el Hotel Fenix Beach Cartagena. Habitaciones confortables, desayunos incluidos y descanso garantizado frente al mar.',
            cta: 'Reservar Habitación / Estadía',
            url: 'https://fenixbeachcartagena.com/hospedaje'
          }
        }
      ]
    }
  ],

  // Actividad en Tiempo Real
  liveActivity: [
    { time: '10:42', agent: 'Prospección IA', agentId: 'prospeccion', color: '#00F2FE', text: 'Auditoría de Keywords: 10 combinaciones con piscina activas en Fénix Beach Club & Restaurante' },
    { time: '10:31', agent: 'Convenios IA', agentId: 'convenios', color: '#F59E0B', text: 'Day Pass Corporativo agendado para 45 personas en Fénix Beach Club & Restaurante Cartagena' },
    { time: '10:24', agent: 'Comercial IA', agentId: 'comercial', color: '#10B981', text: 'Reserva confirmada: Villa con Piscina (Producto Prioritario) en Hotel Fenix Beach Cartagena' },
    { time: '10:18', agent: 'Recuperación IA', agentId: 'recuperacion', color: '#F97316', text: 'Reserva reactivada: Bungalow rodeado de naturaleza (Producto Diferenciador)' },
    { time: '10:12', agent: 'Eventos IA', agentId: 'eventos', color: '#8B5CF6', text: 'Reserva de pasadía de aniversario para 25 personas en área de restaurante de playa' },
    { time: '10:07', agent: 'Analista IA', agentId: 'analista', color: '#EC4899', text: 'Verificación completada: 0% de mezcla entre pasadías y hospedaje en campañas' }
  ],

  // Negocios Cerrados
  closedDeals: [
    {
      id: 'deal-001',
      company: 'Grupo Empresarial Deloitte',
      city: 'Bogotá, Colombia',
      hotel: 'Fénix Beach Club & Restaurante Cartagena',
      propertyId: 'beach-club',
      service: 'Pasadía Corporativo & Day Pass (80 Personas)',
      closeDate: '14 May 2025',
      value: '$ 28.500.000 COP',
      numericValue: 28500000,
      leaderAgent: 'Convenios IA',
      leaderAgentId: 'convenios',
      roi: '6.2x',
      duration: '1 día',
      nights: '0 noches (Pasadía)',
      badge: 'PASADÍA CERRADO',
      participatingAgents: ['Convenios IA', 'Prospección IA', 'Comercial IA', 'Director Comercial IA'],
      summary: 'Empresa corporativa que contrató un pasadía exclusivo de día para 80 colaboradores en Fénix Beach Club & Restaurante Cartagena. Incluyó transporte marítimo, lanchas, uso de piscina frente al mar, camas de sol y menú gastronómico especial.',
      timeline: [
        { date: '02 Abr 2025', text: 'Solicitud de pasadía de día recibida por Google Ads.', agent: 'Prospección IA' },
        { date: '05 Abr 2025', text: 'Presentación de paquete Day Pass con piscina y menú caribeño.', agent: 'Convenios IA' },
        { date: '14 May 2025', text: 'Reserva confirmada y pago total recibido.', agent: 'Comercial IA' }
      ],
      impact: { revenue: '$ 28.500.000 COP', contacts: '80 Asistentes', meetings: 'Pasadía Completo', satisfaction: '99%' }
    },
    {
      id: 'deal-002',
      company: 'Familia Mendoza / Evento Privado',
      city: 'Medellín, Colombia',
      hotel: 'Hotel Fenix Beach Cartagena',
      propertyId: 'hotel',
      service: 'Reserva de Villa con Piscina (7 Noches)',
      closeDate: '10 May 2025',
      value: '$ 42.000.000 COP',
      numericValue: 42000000,
      leaderAgent: 'Comercial IA',
      leaderAgentId: 'comercial',
      roi: '5.4x',
      duration: '7 noches',
      nights: '7 noches (Villa)',
      badge: 'VILLA CON PISCINA GANADA',
      participatingAgents: ['Comercial IA', 'Analista IA', 'Director Comercial IA'],
      summary: 'Reserva de Villa con Piscina (Producto Prioritario) para vacaciones familiares de 10 personas durante 7 noches en el Hotel Fenix Beach Cartagena. Incluyó atención personalizada y desayunos incluidos.',
      timeline: [
        { date: '15 Mar 2025', text: 'Lead generado a través de campaña Google Ads de Villas.', agent: 'Prospección IA' },
        { date: '20 Mar 2025', text: 'Cotización de Villa con Piscina enviada.', agent: 'Comercial IA' },
        { date: '10 May 2025', text: 'Reserva garantizada con 100% de anticipo.', agent: 'Comercial IA' }
      ],
      impact: { revenue: '$ 42.000.000 COP', contacts: '10 Huéspedes', meetings: 'Estadía 7 días', satisfaction: '98%' }
    },
    {
      id: 'deal-003',
      company: 'TechSolutions Latam',
      city: 'Cali, Colombia',
      hotel: 'Hotel Fenix Beach Cartagena',
      propertyId: 'hotel',
      service: 'Escapada en Bungalow rodeado de Naturaleza (5 Noches)',
      closeDate: '07 May 2025',
      value: '$ 18.600.000 COP',
      numericValue: 18600000,
      leaderAgent: 'Recuperación IA',
      leaderAgentId: 'recuperacion',
      roi: '5.8x',
      duration: '5 noches',
      nights: '5 noches (Bungalow)',
      badge: 'BUNGALOW GANADO',
      participatingAgents: ['Recuperación IA', 'Comercial IA'],
      summary: 'Reserva de Bungalow rodeado de Naturaleza (Producto Diferenciador) para retiro de descanso de directivos. Experiencia en entorno natural de playa y desconexión total en Hotel Fenix Beach Cartagena.',
      timeline: [
        { date: '10 Feb 2025', text: 'Cotización pausada en seguimiento.', agent: 'Comercial IA' },
        { date: '14 Mar 2025', text: 'Re-engagement destacando experiencia en Bungalow.', agent: 'Recuperación IA' },
        { date: '07 May 2025', text: 'Cierre de reserva de 5 noches.', agent: 'Recuperación IA' }
      ],
      impact: { revenue: '$ 18.600.000 COP', contacts: '4 Ejecutivos', meetings: 'Retiro 5 días', satisfaction: '97%' }
    },
    {
      id: 'deal-004',
      company: 'Salud & Vida IPS',
      city: 'Bogotá, Colombia',
      hotel: 'Fénix Beach Club & Restaurante Cartagena',
      propertyId: 'beach-club',
      service: 'Pasadía de Integración + Almuerzo en Restaurante (50 personas)',
      closeDate: '02 May 2025',
      value: '$ 19.500.000 COP',
      numericValue: 19500000,
      leaderAgent: 'Eventos IA',
      leaderAgentId: 'eventos',
      roi: '4.8x',
      duration: '1 día',
      nights: '0 noches (Pasadía)',
      badge: 'PASADÍA CERRADO',
      participatingAgents: ['Eventos IA', 'Convenios IA', 'Comercial IA'],
      summary: 'Jornada de integración médica de 1 día con pasadía de playa, uso de piscina y almuerzo gastronómico especial en el restaurante de Fénix Beach Club & Restaurante Cartagena.',
      timeline: [
        { date: '01 Mar 2025', text: 'Consulta de pasadía grupal recibida.', agent: 'Eventos IA' },
        { date: '02 May 2025', text: 'Reserva formalizada.', agent: 'Convenios IA' }
      ],
      impact: { revenue: '$ 19.500.000 COP', contacts: '50 Médicos', meetings: 'Jornada de Día', satisfaction: '96%' }
    },
    {
      id: 'deal-005',
      company: 'Agencia Viajes Caribe Top',
      city: 'Barranquilla, Colombia',
      hotel: 'Hotel Fenix Beach Cartagena',
      propertyId: 'hotel',
      service: 'Hospedaje General Grupo (15 Habitaciones / 3 Noches)',
      closeDate: '28 Abr 2025',
      value: '$ 39.600.000 COP',
      numericValue: 39600000,
      leaderAgent: 'Prospección IA',
      leaderAgentId: 'prospeccion',
      roi: '6.0x',
      duration: '3 noches',
      nights: '45 noches/hab',
      badge: 'HOSPEDAJE GANADO',
      participatingAgents: ['Prospección IA', 'Comercial IA', 'Director Comercial IA'],
      summary: 'Reserva de grupo en categoría Hospedaje General para grupo turístico VIP en el Hotel Fenix Beach Cartagena.',
      timeline: [
        { date: '05 Feb 2025', text: 'Lead cualificado para campaña de hospedaje.', agent: 'Prospección IA' },
        { date: '28 Abr 2025', text: 'Reserva confirmada.', agent: 'Comercial IA' }
      ],
      impact: { revenue: '$ 39.600.000 COP', contacts: '30 Pasajeros', meetings: '3 Noches', satisfaction: '98%' }
    }
  ],

  // Oportunidades B2B
  opportunities: [
    {
      id: 'opp-101',
      company: 'Constructora Bolívar (Pasadía Grupo)',
      value: '$ 22.000.000 COP',
      stage: 'En negociación',
      stageCode: 'negociacion',
      probability: '85%',
      city: 'Bogotá',
      property: 'Fénix Beach Club & Restaurante Cartagena',
      agents: ['Prospección IA', 'Comercial IA']
    },
    {
      id: 'opp-102',
      company: 'Inversionistas Medellín (Reserva Villa con Piscina)',
      value: '$ 35.000.000 COP',
      stage: 'Propuesta enviada',
      stageCode: 'propuesta',
      probability: '75%',
      city: 'Medellín',
      property: 'Hotel Fenix Beach Cartagena',
      agents: ['Comercial IA', 'Convenios IA']
    },
    {
      id: 'opp-103',
      company: 'Banca Internacional (Estadía Bungalows Naturaleza)',
      value: '$ 24.500.000 COP',
      stage: 'Reunión programada',
      stageCode: 'reunion',
      probability: '65%',
      city: 'Cali',
      property: 'Hotel Fenix Beach Cartagena',
      agents: ['Recuperación IA', 'Analista IA']
    },
    {
      id: 'opp-104',
      company: 'Club de Ejecutivos (Day Pass & Gastronomía)',
      value: '$ 15.000.000 COP',
      stage: 'Contactada',
      stageCode: 'contactada',
      probability: '50%',
      city: 'Barranquilla',
      property: 'Fénix Beach Club & Restaurante Cartagena',
      agents: ['Convenios IA', 'Eventos IA']
    }
  ],

  // Misiones predefinidas de ejemplo
  missionsHistory: [
    {
      id: 'mis-001',
      title: 'Ampliar cobertura de palabras clave de piscina para Fénix Beach Club & Restaurante Cartagena',
      assignedAgents: ['Prospección IA', 'Analista IA'],
      priority: 'Alta',
      status: 'Completada',
      progress: '100%',
      createdAt: 'Hace 1 hora'
    },
    {
      id: 'mis-002',
      title: 'Reforzar campaña de Villas con Piscina como Producto Prioritario en Hotel Fenix Beach',
      assignedAgents: ['Comercial IA', 'Director Comercial IA'],
      priority: 'Alta',
      status: 'En ejecución',
      progress: '80%',
      createdAt: 'Hace 3 horas'
    }
  ]
};

// Exportar globalmente
if (typeof window !== 'undefined') {
  window.DEMO_DATA = DEMO_DATA;
}
