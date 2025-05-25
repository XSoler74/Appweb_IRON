export interface GameCharacter {
  name: string;
  experience: number;
  level: number;
  stats: {
    edge: number; // Filo
    heart: number; // Corazón
    iron: number; // Hierro
    shadow: number; // Sombra
    wits: number; // Mente
  };
  health: number; // Salud
  spirit: number; // Espíritu
  supply: number; // Suministros
  momentum: number; // Impulso
}

export interface ProgressTracker {
  id: string;
  name: string;
  rank: 'Peligroso' | 'Formidable' | 'Extremo' | 'Épico';
  progress: number;
  maxProgress: number;
}

export interface OracleConsultation {
  type: string;
  roll: number;
  result: string;
  timestamp: string;
}

export interface GameData {
  character: GameCharacter;
  progressTrackers: ProgressTracker[];
  oracleHistory: OracleConsultation[];
}

export const defaultCharacter: GameCharacter = {
  name: '',
  experience: 0,
  level: 1,
  stats: {
    edge: 2,
    heart: 2,
    iron: 2,
    shadow: 2,
    wits: 2
  },
  health: 5,
  spirit: 5,
  supply: 5,
  momentum: 2
};

export const defaultGameData: GameData = {
  character: defaultCharacter,
  progressTrackers: [],
  oracleHistory: []
};

// Oracle data based on Ironsworn Spanish edition (Lodestar) - Exact match with PDF
export const oracleData = {
  // Oráculo 1: Acción (01-100)
  action: [
    'Intrigar', 'Contratacar', 'Debilitar', 'Iniciar', 'Crear', 'Prometer', 'Vengar', 'Vigilar', 'Derrotar', 'Controlar',
    'Romper', 'Arriesgarse', 'Rendirse', 'Inspeccionar', 'Saquear', 'Escapar', 'Agredir', 'Desviar', 'Amenazar', 'Atacar',
    'Marcharse', 'Preservar', 'Manipular', 'Quitar', 'Eliminar', 'Retirarse', 'Abandonar', 'Investigar', 'Sostener', 'Concentrarse',
    'Descubrir', 'Infringir', 'Ayudar', 'Ratificar', 'Flaquear', 'Reprimir', 'Cazar', 'Compartir', 'Destruir', 'Evitar',
    'Rechazar', 'Exigir', 'Explorar', 'Fomentar', 'Apoderarse', 'Lamentar', 'Revelar', 'Reunirse', 'Desafiar', 'Transformar',
    'Perseverar', 'Servir', 'Comenzar', 'Moverse', 'Coordinar', 'Resistir', 'Esperar', 'Impresionar', 'Tomar', 'Oponerse',
    'Capturar', 'Abrumar', 'Retar', 'Adquirir', 'Proteger', 'Terminar', 'Reforzar', 'Recuperarse', 'Avanzar', 'Comandar',
    'Rehusar', 'Encontrar', 'Entregar', 'Esconderse', 'Fortificar', 'Traicionar', 'Asegurar', 'Llegar', 'Afectar', 'Cambiar',
    'Defender', 'Debatir', 'Respaldar', 'Seguir', 'Construir', 'Localizar', 'Soportar', 'Liberar', 'Perder', 'Reducir',
    'Intensificar', 'Distraer', 'Viajar', 'Escoltar', 'Aprender', 'Comunicar', 'Partir', 'Buscar', 'Cargar', 'Invocar'
  ],
  
  // Oráculo 2: Tema (01-100)
  theme: [
    'Riesgo', 'Capacidad', 'Precio', 'Aliado', 'Batalla', 'Seguridad', 'Supervivencia', 'Arma', 'Herida', 'Refugio',
    'Líder', 'Miedo', 'Tiempo', 'Deber', 'Secreto', 'Inocencia', 'Renombre', 'Dirección', 'Muerte', 'Honor',
    'Trabajo', 'Solución', 'Herramienta', 'Equilibrio', 'Amor', 'Impedimento', 'Creación', 'Deterioro', 'Comercio', 'Vínculo',
    'Esperanza', 'Superstición', 'Paz', 'Engaño', 'Historia', 'Mundo', 'Juramento', 'Protección', 'Naturaleza', 'Opinión',
    'Responsabilidad', 'Desagravio', 'Oportunidad', 'Facción', 'Peligro', 'Corrupción', 'Libertad', 'Deuda', 'Odio', 'Posesión',
    'Forastero', 'Entrada', 'Tierras', 'Criatura', 'Enfermedad', 'Ventaja', 'Sangre', 'Lengua', 'Rumor', 'Debilidad',
    'Avaricia', 'Familia', 'Recurso', 'Edificio', 'Sueño', 'Comunidad', 'Guerra', 'Augurio', 'Recompensa', 'Destino',
    'Impulso', 'Poder', 'Recuerdo', 'Ruina', 'Artes místicas', 'Rival', 'Problema', 'Idea', 'Venganza', 'Salud',
    'Camaradería', 'Rival', 'Religión', 'Espíritu', 'Fama', 'Desolación', 'Fuerza', 'Conocimiento', 'Verdad', 'Búsqueda',
    'Orgullo', 'Pérdida', 'Ley', 'Camino', 'Aviso', 'Relación', 'Riqueza', 'Hogar', 'Estrategia', 'Suministros'
  ],
  
  // Oráculo 3: Región (distribution based on ranges in PDF)
  region: [
    'Las Islas del Escudo', 'Las Islas del Escudo', 'Las Islas del Escudo', 'Las Islas del Escudo', 'Las Islas del Escudo', 'Las Islas del Escudo',
    'La Costa Quebrada', 'La Costa Quebrada', 'La Costa Quebrada', 'La Costa Quebrada', 'La Costa Quebrada', 'La Costa Quebrada',
    'Los Bosques Primigenios', 'Los Bosques Primigenios', 'Los Bosques Primigenios', 'Los Bosques Primigenios',
    'Las Tierras Anegadas', 'Las Tierras Anegadas', 'Las Tierras Anegadas', 'Las Tierras Anegadas', 'Las Tierras Anegadas', 'Las Tierras Anegadas',
    'El Refugio', 'El Refugio', 'El Refugio', 'El Refugio', 'El Refugio', 'El Refugio', 'El Refugio',
    'El Interior', 'El Interior', 'El Interior', 'El Interior', 'El Interior', 'El Interior',
    'Las Colinas de la Tempestad', 'Las Colinas de la Tempestad', 'Las Colinas de la Tempestad', 'Las Colinas de la Tempestad', 'Las Colinas de la Tempestad', 'Las Colinas de la Tempestad',
    'Las Montañas de los Velos', 'Las Montañas de los Velos', 'Las Montañas de los Velos', 'Las Montañas de los Velos',
    'Los Yermos de la Devastación', 'Los Yermos de la Devastación', 'Los Yermos de la Devastación', 'Los Yermos de la Devastación', 'Los Yermos de la Devastación',
    'Otro lugar'
  ],
  
  // Oráculo 4: Lugar (01-100, exact order from PDF)
  location: [
    'Escondrijo', 'Ruinas', 'Mina', 'Erial', 'Lugar místico', 'Camino', 'Puesto avanzado', 'Muralla', 'Campo de batalla', 'Choza',
    'Arroyo', 'Guarida', 'Fuerte', 'Puente', 'Campamento', 'Túmulo/Tumba', 'Caravana', 'Caravana', 'Catarata', 'Catarata',
    'Cueva', 'Cueva', 'Pantano', 'Pantano', 'Ciénaga', 'Ciénaga', 'Desfiladero', 'Desfiladero', 'Carretera', 'Carretera',
    'Árbol', 'Árbol', 'Estanque', 'Estanque', 'Campos de cultivo', 'Campos de cultivo', 'Marisma', 'Marisma', 'Granja', 'Granja',
    'Rápidos', 'Rápidos', 'Paso de montaña', 'Paso de montaña', 'Sendero', 'Sendero', 'Calvero/Claro', 'Calvero/Claro', 'Llanura', 'Llanura',
    'Cresta', 'Cresta', 'Acantilado', 'Acantilado', 'Arboleda', 'Arboleda', 'Aldea', 'Aldea', 'Páramo', 'Páramo',
    'Chaparral', 'Chaparral', 'Vado fluvial', 'Vado fluvial', 'Valle', 'Valle', 'Bahía/Fiordo', 'Bahía/Fiordo', 'Estribación/Ladera', 'Estribación/Ladera',
    'Lago', 'Lago', 'Río', 'Río', 'Río', 'Bosque denso', 'Bosque denso', 'Bosque denso', 'Bosque denso',
    'Costa', 'Costa', 'Costa', 'Costa', 'Colina', 'Colina', 'Colina', 'Colina', 'Colina',
    'Montaña', 'Montaña', 'Montaña', 'Montaña', 'Montaña', 'Bosque disperso', 'Bosque disperso', 'Bosque disperso', 'Bosque disperso', 'Bosque disperso', 'Anomalía'
  ],
  
  // Oráculo 5: Lugar en aguas costeras (exact from PDF)
  coastalLocation: [
    'Flota', 'Sargazo', 'Restos de naufragio', 'Lugar místico', 'Guarida', 'Pecio', 'Pecio', 'Pecio', 'Pecio', 'Pecio',
    'Puerto', 'Puerto', 'Puerto', 'Puerto', 'Puerto', 'Barco', 'Barco', 'Barco', 'Barco', 'Barco', 'Barco', 'Barco',
    'Rocas', 'Rocas', 'Rocas', 'Rocas', 'Rocas', 'Rocas', 'Rocas', 'Rocas', 'Fiordo', 'Fiordo', 'Fiordo', 'Fiordo', 'Fiordo', 'Fiordo', 'Fiordo', 'Fiordo',
    'Estuario', 'Estuario', 'Estuario', 'Estuario', 'Estuario', 'Estuario', 'Estuario', 'Estuario', 'Cala', 'Cala', 'Cala', 'Cala', 'Cala', 'Cala', 'Cala', 'Cala',
    'Bahía', 'Bahía', 'Bahía', 'Bahía', 'Bahía', 'Bahía', 'Bahía', 'Bahía', 'Hielo', 'Hielo', 'Hielo', 'Hielo', 'Hielo', 'Hielo', 'Hielo', 'Hielo',
    'Isla', 'Isla', 'Isla', 'Isla', 'Isla', 'Isla', 'Isla', 'Isla', 'Isla', 'Isla', 'Isla', 'Isla', 'Isla', 'Isla', 'Isla',
    'Aguas abiertas', 'Aguas abiertas', 'Aguas abiertas', 'Aguas abiertas', 'Aguas abiertas', 'Aguas abiertas', 'Aguas abiertas', 'Aguas abiertas', 'Aguas abiertas', 'Aguas abiertas', 'Aguas abiertas', 'Aguas abiertas', 'Aguas abiertas', 'Aguas abiertas',
    'Anomalía'
  ],
  
  // Oráculo 6: Descriptor de un lugar (01-100, pairs from PDF)
  locationDescriptor: [
    'En altura', 'En altura', 'Remoto', 'Remoto', 'Expuesto', 'Expuesto', 'Pequeño', 'Pequeño', 'Accidentado', 'Accidentado',
    'Diverso', 'Diverso', 'Duro', 'Duro', 'Oscuro', 'Oscuro', 'Problemático', 'Problemático', 'En disputa', 'En disputa',
    'Lúgubre', 'Lúgubre', 'Salvaje', 'Salvaje', 'Fértil', 'Fértil', 'Prohibido', 'Prohibido', 'Antiguo', 'Antiguo',
    'Peligroso', 'Peligroso', 'Oculto', 'Oculto', 'Ocupado', 'Ocupado', 'Rico', 'Rico', 'Grande', 'Grande',
    'Violento', 'Violento', 'Defendido', 'Defendido', 'Doblegado', 'Doblegado', 'Místico', 'Místico', 'Inaccesible', 'Inaccesible',
    'Protegido', 'Protegido', 'Abandonado', 'Abandonado', 'Amplio', 'Amplio', 'Nauseabundo', 'Nauseabundo', 'Muerto', 'Muerto',
    'En ruinas', 'En ruinas', 'Estéril', 'Estéril', 'Frío', 'Frío', 'Echado a perder', 'Echado a perder', 'A nivel del mar', 'A nivel del mar',
    'Hermoso', 'Hermoso', 'Fructífero', 'Fructífero', 'Exuberante', 'Exuberante', 'Inundado', 'Inundado', 'Vacío', 'Vacío',
    'Extraño', 'Extraño', 'Corrupto', 'Corrupto', 'Pacífico', 'Pacífico', 'Olvidado', 'Olvidado', 'En crecimiento', 'En crecimiento',
    'Estable', 'Estable', 'Tupido', 'Tupido', 'Civilizado', 'Civilizado', 'Desolado', 'Desolado', 'Aislado', 'Aislado'
  ],
  
  // Oráculo 9: Problema de un asentamiento (exact from PDF)
  settlementTrouble: [
    'No aceptan forasteros', 'No aceptan forasteros', 'Descubrimiento peligroso', 'Descubrimiento peligroso', 'Presagios funestos', 'Presagios funestos',
    'Desastre natural', 'Desastre natural', 'Viejas heridas reabiertas', 'Viejas heridas reabiertas', 'Un objeto importante desaparecido', 'Un objeto importante desaparecido',
    'Han capturado a alguien', 'Han capturado a alguien', 'Fenómeno misterioso', 'Fenómeno misterioso', 'Revuelta contra su líder', 'Revuelta contra su líder',
    'Alguien a quien marginaron busca venganza', 'Alguien a quien marginaron busca venganza', 'Asentamiento rival', 'Asentamiento rival', 'La naturaleza contrataca', 'La naturaleza contrataca',
    'Alguien ha desaparecido', 'Alguien ha desaparecido', 'Se detiene la producción', 'Se detiene la producción', 'Asesinatos misteriosos', 'Asesinatos misteriosos',
    'Es hora de pagar las deudas', 'Es hora de pagar las deudas', 'Liderazgo tiránico', 'Liderazgo tiránico', 'Accidente catastrófico', 'Accidente catastrófico',
    'Alianza con sus rivales', 'Alianza con sus rivales', 'Saqueadores se ceban con las personas más débiles', 'Saqueadores se ceban con las personas más débiles',
    'Pasado maldito', 'Pasado maldito', 'Se acusa a una persona inocente', 'Se acusa a una persona inocente', 'Corrompido por la magia negra', 'Corrompido por la magia negra',
    'Aislado por el mal tiempo', 'Aislado por el mal tiempo', 'Escasean los alimentos', 'Escasean los alimentos', 'Una enfermedad fuera de control', 'Una enfermedad fuera de control',
    'Una alianza rota', 'Una alianza rota', 'Un ataque inminente', 'Un ataque inminente', 'Caravana desaparecida', 'Caravana desaparecida',
    'Se revela un oscuro secreto', 'Se revela un oscuro secreto', 'Expedición urgente', 'Expedición urgente', 'Vacío de poder (sin líder)', 'Vacío de poder (sin líder)',
    'Familias en conflicto', 'Familias en conflicto', 'Liderazgo incompetente', 'Liderazgo incompetente', 'Belicosidad temeraria', 'Belicosidad temeraria',
    'Bestia anda a la caza', 'Bestia anda a la caza', 'Una traición interna', 'Una traición interna', 'Ruptura de una tregua', 'Ruptura de una tregua',
    'La ira de un fantasma', 'La ira de un fantasma', 'Conflicto con los primeros nacidos', 'Conflicto con los primeros nacidos', 'Cierre de una ruta mercante', 'Cierre de una ruta mercante',
    'Entre dos fuegos', 'Entre dos fuegos', 'Un forastero causa desavenencias', 'Un forastero causa desavenencias', 'Un evento importante corre peligro', 'Un evento importante corre peligro',
    'Tradición peligrosa', 'Tradición peligrosa', 'Tira dos veces', 'Tira dos veces', 'Tira dos veces', 'Tira dos veces', 'Tira dos veces', 'Tira dos veces', 'Tira dos veces', 'Tira dos veces', 'Tira dos veces', 'Tira dos veces'
  ],
  
  // Oráculo 10: Rol de un personaje (exact distribution from PDF)
  characterRole: [
    'Criminal', 'Criminal', 'Sanador', 'Sanador', 'Bandido', 'Bandido', 'Guía', 'Guía', 'Guía',
    'Artista', 'Artista', 'Artista', 'Minero', 'Minero', 'Minero', 'Mercenario', 'Mercenario', 'Mercenario',
    'Proscrito', 'Proscrito', 'Proscrito', 'Vagabundo', 'Vagabundo', 'Vagabundo', 'Guardabosques', 'Guardabosques', 'Guardabosques',
    'Viajero', 'Viajero', 'Viajero', 'Practica las artes místicas', 'Practica las artes místicas', 'Practica las artes místicas',
    'Sacerdote', 'Sacerdote', 'Sacerdote', 'Marinero', 'Marinero', 'Marinero', 'Peregrino', 'Peregrino', 'Peregrino',
    'Ladrón', 'Ladrón', 'Ladrón', 'Aventurero', 'Aventurero', 'Aventurero', 'Carroñero', 'Carroñero', 'Carroñero',
    'Líder', 'Líder', 'Líder', 'Guardia', 'Guardia', 'Guardia', 'Guardia', 'Artesano', 'Artesano', 'Artesano', 'Artesano',
    'Batidor', 'Batidor', 'Batidor', 'Batidor', 'Pastor', 'Pastor', 'Pastor', 'Pastor', 'Pescador', 'Pescador', 'Pescador', 'Pescador',
    'Guerrero', 'Guerrero', 'Guerrero', 'Guerrero', 'Guerrero', 'Cazador', 'Cazador', 'Cazador', 'Cazador', 'Cazador',
    'Saqueador', 'Saqueador', 'Saqueador', 'Saqueador', 'Saqueador', 'Mercader', 'Mercader', 'Mercader', 'Mercader', 'Mercader',
    'Granjero', 'Granjero', 'Granjero', 'Granjero', 'Granjero', 'Rol inusual'
  ],
  
  // Oráculo 11: Propósito de un personaje (exact from PDF)
  characterGoal: [
    'Hacerse con un objeto', 'Hacerse con un objeto', 'Hacerse con un objeto', 'Llegar a un acuerdo', 'Llegar a un acuerdo', 'Llegar a un acuerdo',
    'Construir una relación', 'Construir una relación', 'Construir una relación', 'Provocar la ruptura de una relación', 'Provocar la ruptura de una relación', 'Provocar la ruptura de una relación',
    'Buscar una verdad', 'Buscar una verdad', 'Buscar una verdad', 'Pagar una deuda', 'Pagar una deuda', 'Pagar una deuda',
    'Desmentir una falsedad', 'Desmentir una falsedad', 'Desmentir una falsedad', 'Dañar a un rival', 'Dañar a un rival', 'Dañar a un rival',
    'Curar una enfermedad', 'Curar una enfermedad', 'Curar una enfermedad', 'Encontrar a una persona', 'Encontrar a una persona', 'Encontrar a una persona',
    'Encontrar un hogar', 'Encontrar un hogar', 'Encontrar un hogar', 'Hacerse con el poder', 'Hacerse con el poder', 'Hacerse con el poder',
    'Recuperar una relación', 'Recuperar una relación', 'Recuperar una relación', 'Crear un objeto', 'Crear un objeto', 'Crear un objeto',
    'Viajar a un lugar', 'Viajar a un lugar', 'Viajar a un lugar', 'Adquirir provisiones', 'Adquirir provisiones', 'Adquirir provisiones',
    'Rebelarse contra el poder', 'Rebelarse contra el poder', 'Rebelarse contra el poder', 'Cobrar una deuda', 'Cobrar una deuda', 'Cobrar una deuda',
    'Proteger un secreto', 'Proteger un secreto', 'Proteger un secreto', 'Extender la fe', 'Extender la fe', 'Extender la fe',
    'Enriquecerse', 'Enriquecerse', 'Enriquecerse', 'Proteger a una persona', 'Proteger a una persona', 'Proteger a una persona',
    'Proteger el statu quo', 'Proteger el statu quo', 'Proteger el statu quo', 'Mejorar su estatus', 'Mejorar su estatus', 'Mejorar su estatus',
    'Defender un lugar', 'Defender un lugar', 'Defender un lugar', 'Vengar un agravio', 'Vengar un agravio', 'Vengar un agravio',
    'Cumplir con una obligación', 'Cumplir con una obligación', 'Cumplir con una obligación', 'Adquirir conocimientos', 'Adquirir conocimientos', 'Adquirir conocimientos',
    'Demostrar su valía', 'Demostrar su valía', 'Demostrar su valía', 'Encontrar la redención', 'Encontrar la redención', 'Escapar de algo', 'Escapar de algo',
    'Resolver una disputa', 'Resolver una disputa', 'Resolver una disputa', 'Tira dos veces', 'Tira dos veces', 'Tira dos veces', 'Tira dos veces', 'Tira dos veces'
  ],
  
  // Oráculo 12: Descriptor de un personaje (01-100, exact from PDF)
  characterDescriptor: [
    'Estoico', 'Atractivo', 'Pasivo', 'Distante', 'Afectuoso', 'Generoso', 'Creído', 'Armado', 'Inteligente', 'Valiente',
    'Feo', 'Sociable', 'Destinado a fracasar', 'Bien relacionado', 'Osado', 'Envidioso', 'Beligerante', 'Activo', 'Suspicaz', 'Hostil',
    'Insensible', 'Capaz', 'Talentoso', 'Experimentado', 'Engañoso', 'Ambicioso', 'Agresivo', 'Engreído', 'Orgulloso', 'Severo',
    'Dependiente', 'Desconfiado', 'Fuerte', 'Perspicaz', 'Peligroso', 'Extravagante', 'Alegre', 'Desfigurado', 'Intolerante', 'Habilidoso',
    'Miserable', 'Asustadizo', 'Insensible', 'Salvaje', 'Amargado', 'Astuto', 'Arrepentido', 'Amable', 'Encantador', 'Distraído',
    'Crítico', 'Cauto', 'Ingenioso', 'Cansado', 'Herido', 'Ansioso', 'Poderoso', 'Atlético', 'Resuelto', 'Cruel',
    'Silencioso', 'Honesto', 'Infame', 'Se muere', 'Huraño', 'Artístico', 'Discapacitado', 'Confuso', 'Manipulador', 'Tranquilo',
    'Furtivo', 'Seguro', 'Débil', 'Amistoso', 'Sabio', 'Influyente', 'Joven', 'Aventurero', 'Oprimido', 'Vengativo',
    'Cooperativo', 'Viste una armadura', 'Apático', 'Determinado', 'Leal', 'Enfermo', 'Religioso', 'Egoísta', 'Anciano', 'Apasionado',
    'Violento', 'Simpático', 'Temperamental', 'Obstinado', 'Incompetente', 'Avaricioso', 'Cobarde', 'Obsesionado', 'Descuidado', 'Ha jurado por el Hierro'
  ],
  
  // Oráculo 13a: Nombres del pueblo del Hierro (01-100, exact from PDF)
  ironlanderNamesA: [
    'Solan', 'Keelan', 'Cadigan', 'Solak', 'Kodroth', 'Kione', 'Katja', 'Tion', 'Artiga', 'Eos',
    'Bastien', 'Elli', 'Maura', 'Haleema', 'Abella', 'Morter', 'Wulan', 'Mai', 'Farina', 'Pearce',
    'Wynne', 'Haf', 'Aeddon', 'Khinara', 'Milla', 'Nakata', 'Kynan', 'Kiah', 'Jaggar', 'Beca',
    'Ikram', 'Melia', 'Sidan', 'Deshi', 'Tessa', 'Sibila', 'Morien', 'Mona', 'Padma', 'Avella',
    'Naila', 'Lio', 'Cera', 'Ithela', 'Zhan', 'Kaivan', 'Valeri', 'Hirsham', 'Pemba', 'Edda',
    'Lestara', 'Laggo', 'Elstan', 'Saskia', 'Kabeera', 'Caldas', 'Nisus', 'Serene', 'Chenda', 'Themon',
    'Erin', 'Alban', 'Parcell', 'Jelma', 'Willa', 'Nadira', 'Gwen', 'Amara', 'Masias', 'Kanno',
    'Razeena', 'Mira', 'Perella', 'Myrick', 'Qamar', 'Kormak', 'Zura', 'Zanita', 'Brynn', 'Tegan',
    'Pendry', 'Quinn', 'Fanir', 'Glain', 'Emelyn', 'Kendi', 'Althus', 'Leela', 'Ishana', 'Flint',
    'Delkash', 'Nia', 'Nan', 'Keeara', 'Katania', 'Morell', 'Temir', 'Bas', 'Sabine', 'Tallus'
  ],

  // Oráculo 13b: Nombres del pueblo del Hierro (01-100, exact from PDF)
  ironlanderNamesB: [
    'Segure', 'Gethin', 'Bataar', 'Basira', 'Joa', 'Glynn', 'Toran', 'Arasen', 'Kuron', 'Griff',
    'Owena', 'Adda', 'Euros', 'Kova', 'Kara', 'Morgan', 'Nanda', 'Tamara', 'Asha', 'Delos',
    'Torgan', 'Makari', 'Selva', 'Kimura', 'Rhian', 'Tristan', 'Siorra', 'Sayer', 'Cortina', 'Vesna',
    'Kataka', 'Keyshia', 'Mila', 'Lili', 'Vigo', 'Sadia', 'Malik', 'Dag', 'Kuno', 'Reva',
    'Kai', 'Kalina', 'Jihan', 'Hennion', 'Abram', 'Aida', 'Myrtle', 'Nekun', 'Menna', 'Tahir',
    'Sarria', 'Nakura', 'Akiya', 'Talan', 'Mattick', 'Okoth', 'Khulan', 'Verena', 'Beltran', 'Del',
    'Ranna', 'Alina', 'Muna', 'Mura', 'Torrens', 'Yuda', 'Nazmi', 'Ghalen', 'Sardia', 'Shona',
    'Kalidas', 'Wena', 'Sendra', 'Kori', 'Setara', 'Lucia', 'Maya', 'Reema', 'Yorath', 'Rhoddri',
    'Shekhar', 'Servan', 'Reese', 'Kenrick', 'Indirra', 'Giliana', 'Jebran', 'Kotama', 'Fara', 'Katrin',
    'Namba', 'Lonna', 'Taylah', 'Kato', 'Esra', 'Eleri', 'Irsia', 'Kayu', 'Bevan', 'Chandra'
  ],
  
  // Oráculo 14: Nombres élficos (01-100, exact from PDF)
  elfNames: [
    'Arsula', 'Arsula', 'Naidita', 'Naidita', 'Belesunna', 'Belesunna', 'Vidarna', 'Vidarna', 'Ninsunu', 'Ninsunu',
    'Balathu', 'Balathu', 'Dorosi', 'Dorosi', 'Gezera', 'Gezera', 'Zursan', 'Zursan', 'Seleeku', 'Seleeku',
    'Utamara', 'Utamara', 'Nebakay', 'Nebakay', 'Dismashk', 'Dismashk', 'Mitunu', 'Mitunu', 'Atani', 'Atani',
    'Kinzura', 'Kinzura', 'Sumula', 'Sumula', 'Ukames', 'Ukames', 'Ahmeshki', 'Ahmeshki', 'Ilsit', 'Ilsit',
    'Mayatanay', 'Mayatanay', 'Etana', 'Etana', 'Gamanna', 'Gamanna', 'Nessana', 'Nessana', 'Uralar', 'Uralar',
    'Tishetu', 'Tishetu', 'Leucia', 'Leucia', 'Sutahe', 'Sutahe', 'Dotani', 'Dotani', 'Uktannu', 'Uktannu',
    'Retenay', 'Retenay', 'Kendalanu', 'Kendalanu', 'Tahuta', 'Tahuta', 'Mattissa', 'Mattissa', 'Anatu', 'Anatu',
    'Aralu', 'Aralu', 'Arakhi', 'Arakhi', 'Ibrahem', 'Ibrahem', 'Sinosu', 'Sinosu', 'Jemshida', 'Jemshida',
    'Visapni', 'Visapni', 'Hullata', 'Hullata', 'Sidura', 'Sidura', 'Kerihu', 'Kerihu', 'Ereshki', 'Ereshki',
    'Cybela', 'Cybela', 'Anunna', 'Anunna', 'Otani', 'Otani', 'Ditani', 'Ditani', 'Faraza', 'Faraza'
  ],

  // Oráculo 15: Otros nombres (three categories: Gigantes, Trolls, Varús)
  otherNames: {
    gigantes: [
      'Chone', 'Chone', 'Chone', 'Chone', 'Banda', 'Banda', 'Banda', 'Banda', 'Jochu', 'Jochu', 'Jochu', 'Jochu',
      'Kira', 'Kira', 'Kira', 'Kira', 'Khatir', 'Khatir', 'Khatir', 'Khatir', 'Chaidu', 'Chaidu', 'Chaidu', 'Chaidu',
      'Atan', 'Atan', 'Atan', 'Atan', 'Buandu', 'Buandu', 'Buandu', 'Buandu', 'Javyn', 'Javyn', 'Javyn', 'Javyn',
      'Khashin', 'Khashin', 'Khashin', 'Khashin', 'Bayara', 'Bayara', 'Bayara', 'Bayara', 'Temura', 'Temura', 'Temura', 'Temura',
      'Kida', 'Kida', 'Kida', 'Kida', 'Kathos', 'Kathos', 'Kathos', 'Kathos', 'Tanua', 'Tanua', 'Tanua', 'Tanua',
      'Bashtu', 'Bashtu', 'Bashtu', 'Bashtu', 'Jaran', 'Jaran', 'Jaran', 'Jaran', 'Othos', 'Othos', 'Othos', 'Othos',
      'Khutan', 'Khutan', 'Khutan', 'Khutan', 'Otaan', 'Otaan', 'Otaan', 'Otaan', 'Martu', 'Martu', 'Martu', 'Martu',
      'Baku', 'Baku', 'Baku', 'Baku', 'Tuban', 'Tuban', 'Tuban', 'Tuban', 'Qudan', 'Qudan', 'Qudan', 'Qudan',
      'Denua', 'Denua', 'Denua', 'Denua'
    ],
    trolls: [
      'Rattle', 'Rattle', 'Rattle', 'Rattle', 'Scratch', 'Scratch', 'Scratch', 'Scratch', 'Wallow', 'Wallow', 'Wallow', 'Wallow',
      'Groak', 'Groak', 'Groak', 'Groak', 'Gimble', 'Gimble', 'Gimble', 'Gimble', 'Scar', 'Scar', 'Scar', 'Scar',
      'Cratch', 'Cratch', 'Cratch', 'Cratch', 'Creech', 'Creech', 'Creech', 'Creech', 'Shush', 'Shush', 'Shush', 'Shush',
      'Glush', 'Glush', 'Glush', 'Glush', 'Slar', 'Slar', 'Slar', 'Slar', 'Gnash', 'Gnash', 'Gnash', 'Gnash',
      'Stoad', 'Stoad', 'Stoad', 'Stoad', 'Grig', 'Grig', 'Grig', 'Grig', 'Bleat', 'Bleat', 'Bleat', 'Bleat',
      'Chortle', 'Chortle', 'Chortle', 'Chortle', 'Cluck', 'Cluck', 'Cluck', 'Cluck', 'Slith', 'Slith', 'Slith', 'Slith',
      'Mongo', 'Mongo', 'Mongo', 'Mongo', 'Creak', 'Creak', 'Creak', 'Creak', 'Burble', 'Burble', 'Burble', 'Burble',
      'Vrusk', 'Vrusk', 'Vrusk', 'Vrusk', 'Snuffle', 'Snuffle', 'Snuffle', 'Snuffle', 'Leech', 'Leech', 'Leech', 'Leech',
      'Herk', 'Herk', 'Herk', 'Herk'
    ],
    varus: [
      'Vata', 'Vata', 'Vata', 'Vata', 'Zora', 'Zora', 'Zora', 'Zora', 'Jasna', 'Jasna', 'Jasna', 'Jasna',
      'Charna', 'Charna', 'Charna', 'Charna', 'Tana', 'Tana', 'Tana', 'Tana', 'Soveen', 'Soveen', 'Soveen', 'Soveen',
      'Radka', 'Radka', 'Radka', 'Radka', 'Zlata', 'Zlata', 'Zlata', 'Zlata', 'Leesla', 'Leesla', 'Leesla', 'Leesla',
      'Byna', 'Byna', 'Byna', 'Byna', 'Meeka', 'Meeka', 'Meeka', 'Meeka', 'Iskra', 'Iskra', 'Iskra', 'Iskra',
      'Jarek', 'Jarek', 'Jarek', 'Jarek', 'Darva', 'Darva', 'Darva', 'Darva', 'Neda', 'Neda', 'Neda', 'Neda',
      'Keha', 'Keha', 'Keha', 'Keha', 'Zhivka', 'Zhivka', 'Zhivka', 'Zhivka', 'Kvata', 'Kvata', 'Kvata', 'Kvata',
      'Staysa', 'Staysa', 'Staysa', 'Staysa', 'Evka', 'Evka', 'Evka', 'Evka', 'Vuksha', 'Vuksha', 'Vuksha', 'Vuksha',
      'Muko', 'Muko', 'Muko', 'Muko', 'Drako', 'Drako', 'Drako', 'Drako', 'Aleko', 'Aleko', 'Aleko', 'Aleko',
      'Vojan', 'Vojan', 'Vojan', 'Vojan'
    ]
  },
  
  // Oráculo 18: Giro argumental destacado (01-100, exact from PDF)
  plotTwist: [
    'Todo era una distracción', 'Todo era una distracción', 'Todo era una distracción', 'Todo era una distracción', 'Todo era una distracción',
    'Se revela un oscuro secreto', 'Se revela un oscuro secreto', 'Se revela un oscuro secreto', 'Se revela un oscuro secreto', 'Se revela un oscuro secreto',
    'Salta una trampa', 'Salta una trampa', 'Salta una trampa', 'Salta una trampa', 'Salta una trampa',
    'Una suposición resulta ser falsa', 'Una suposición resulta ser falsa', 'Una suposición resulta ser falsa', 'Una suposición resulta ser falsa', 'Una suposición resulta ser falsa',
    'Se revela una alianza secreta', 'Se revela una alianza secreta', 'Se revela una alianza secreta', 'Se revela una alianza secreta', 'Se revela una alianza secreta',
    'Tus acciones benefician a un oponente', 'Tus acciones benefician a un oponente', 'Tus acciones benefician a un oponente', 'Tus acciones benefician a un oponente', 'Tus acciones benefician a un oponente',
    'Alguien, que nadie esperaba, regresa de improviso', 'Alguien, que nadie esperaba, regresa de improviso', 'Alguien, que nadie esperaba, regresa de improviso', 'Alguien, que nadie esperaba, regresa de improviso', 'Alguien, que nadie esperaba, regresa de improviso',
    'Se revela un/a antagonista que representa un peligro aún mayor', 'Se revela un/a antagonista que representa un peligro aún mayor', 'Se revela un/a antagonista que representa un peligro aún mayor', 'Se revela un/a antagonista que representa un peligro aún mayor', 'Se revela un/a antagonista que representa un peligro aún mayor',
    'Tú y tu rival compartís un objetivo común', 'Tú y tu rival compartís un objetivo común', 'Tú y tu rival compartís un objetivo común', 'Tú y tu rival compartís un objetivo común', 'Tú y tu rival compartís un objetivo común',
    'Se revela una identidad falsa', 'Se revela una identidad falsa', 'Se revela una identidad falsa', 'Se revela una identidad falsa', 'Se revela una identidad falsa',
    'Eres traicionado por alguien en quien confiabas', 'Eres traicionado por alguien en quien confiabas', 'Eres traicionado por alguien en quien confiabas', 'Eres traicionado por alguien en quien confiabas', 'Eres traicionado por alguien en quien confiabas',
    'Llegas demasiado tarde', 'Llegas demasiado tarde', 'Llegas demasiado tarde', 'Llegas demasiado tarde', 'Llegas demasiado tarde',
    'Se revela el auténtico enemigo o enemiga', 'Se revela el auténtico enemigo o enemiga', 'Se revela el auténtico enemigo o enemiga', 'Se revela el auténtico enemigo o enemiga', 'Se revela el auténtico enemigo o enemiga',
    'La oposición gana nuevos aliados', 'La oposición gana nuevos aliados', 'La oposición gana nuevos aliados', 'La oposición gana nuevos aliados', 'La oposición gana nuevos aliados',
    'Surge un nuevo peligro', 'Surge un nuevo peligro', 'Surge un nuevo peligro', 'Surge un nuevo peligro', 'Surge un nuevo peligro',
    'Alguien o algo desaparece', 'Alguien o algo desaparece', 'Alguien o algo desaparece', 'Alguien o algo desaparece', 'Alguien o algo desaparece',
    'Se revela la verdad sobre una relación', 'Se revela la verdad sobre una relación', 'Se revela la verdad sobre una relación', 'Se revela la verdad sobre una relación', 'Se revela la verdad sobre una relación',
    'Dos situaciones, en apariencia independientes, demuestran estar relacionadas', 'Dos situaciones, en apariencia independientes, demuestran estar relacionadas', 'Dos situaciones, en apariencia independientes, demuestran estar relacionadas', 'Dos situaciones, en apariencia independientes, demuestran estar relacionadas', 'Dos situaciones, en apariencia independientes, demuestran estar relacionadas',
    'Se revelan poderes o capacidades inesperadas', 'Se revelan poderes o capacidades inesperadas', 'Se revelan poderes o capacidades inesperadas', 'Se revelan poderes o capacidades inesperadas', 'Se revelan poderes o capacidades inesperadas',
    'Tira dos veces en esta tabla y aplica ambos resultados', 'Tira dos veces en esta tabla y aplica ambos resultados', 'Tira dos veces en esta tabla y aplica ambos resultados', 'Tira dos veces en esta tabla y aplica ambos resultados', 'Tira dos veces en esta tabla y aplica ambos resultados'
  ],
  
  // Oráculo 7: Nombre de un asentamiento (con ejemplos específicos del PDF)
  settlementName: {
    paisaje: [
      'Montealto', 'Aguas Salobres', 'Bosquefrío', 'Cima de la Sangre', 'El Árbol Sombrío',
      'Vado Piedras', 'Hondagua', 'Cascada Aguas Blancas', 'Grisario del Acantilado', 'Tres Arroyos Grandes'
    ],
    edificio: [
      'Puenteblanco', 'Fortaleza del Solitario', 'Alto del Túmulo', 'Salones Rojos', 'Pozonegro',
      'Estacada Barrera', 'Torrepiedra', 'Salones del Espinar', 'Hogar de la Ceniza', 'Malos Campos'
    ],
    criatura: [
      'El Barranco del Cuervo', 'Marca de Oso', 'Riscolobos', 'Aguja de las Águilas', 'El Reposo de la Wyverna',
      'Bosquillos del Jabalí', 'Zorrera', 'Vigilia del Anciano', 'Cerval Sembrado', 'Sombra Vieja de Dragón'
    ],
    historico: [
      'Espadarrota', 'Caída del Loco', 'Primer Encuentro', 'Yelmorroto', 'Lamentos del Fantasma',
      'El Desafío de Olgar', 'Aguasperdidas', 'El Lamento de Rojirra', 'La Última Legión', 'Derrumbaderos'
    ],
    viejo_mundo: [
      'Abon', 'Daveza', 'Damula', 'Essus', 'Sina',
      'Kazeera', 'Khazu', 'Sova', 'Nabuma', 'Tizza'
    ],
    estacional: [
      'Moradas de Invierno', 'Refugio de Todos los Vientos', 'Descansadero de las Tormentas', 'Escarcha de Lóbrega', 'Marea de Primavera',
      'Brezal de la Tarde', 'Risco de las Nieves', 'Florida del Arroyal', 'Los Hielos Rotos', 'Romanza de Estío'
    ],
    otra_cosa: [
      'La Casa de Hierro', 'Nueva Arkesh', 'Salones de Kei', 'Elisor', 'Yelmo Negro',
      'Arroyo del Elfo', 'Nessana', 'El Paso de las Almas', 'Bienvenida', 'Mala Sombra'
    ]
  },

  // Oráculo 8: Generador rápido de nombre para un asentamiento
  settlementNameQuick: {
    firstTerm: [
      'Páramo', 'Páramo', 'Páramo', 'Páramo', 'Vado', 'Vado', 'Vado', 'Vado', 'Risco', 'Risco', 'Risco', 'Risco',
      'La Vigilia', 'La Vigilia', 'La Vigilia', 'La Vigilia', 'Esperanza', 'Esperanza', 'Esperanza', 'Esperanza',
      'Bosque', 'Bosque', 'Bosque', 'Bosque', 'Cresta', 'Cresta', 'Cresta', 'Cresta', 'Piedra', 'Piedra', 'Piedra', 'Piedra',
      'Descansadero', 'Descansadero', 'Descansadero', 'Descansadero', 'Cascada', 'Cascada', 'Cascada', 'Cascada',
      'Río', 'Río', 'Río', 'Río', 'Campo', 'Campo', 'Campo', 'Campo', 'Colina', 'Colina', 'Colina', 'Colina',
      'Puente', 'Puente', 'Puente', 'Puente', 'Marca', 'Marca', 'Marca', 'Marca', 'Túmulo', 'Túmulo', 'Túmulo', 'Túmulo',
      'Tierra', 'Tierra', 'Tierra', 'Tierra', 'Salón', 'Salón', 'Salón', 'Salón', 'Monte', 'Monte', 'Monte', 'Monte',
      'Peña', 'Peña', 'Peña', 'Peña', 'Arroyuelo', 'Arroyuelo', 'Arroyuelo', 'Arroyuelo', 'Tumba', 'Tumba', 'Tumba', 'Tumba',
      'Granja', 'Granja', 'Granja', 'Granja', 'Hogar', 'Hogar', 'Hogar', 'Hogar', 'Ancho', 'Ancho', 'Ancho', 'Ancho'
    ],
    secondTerm: [
      'de la Lóbrega', 'de la Lóbrega', 'de la Lóbrega', 'de la Lóbrega', 'Verde', 'Verde', 'Verde', 'Verde',
      'del Lobo', 'del Lobo', 'del Lobo', 'del Lobo', 'del Cuervo', 'del Cuervo', 'del Cuervo', 'del Cuervo',
      'Gris', 'Gris', 'Gris', 'Gris', 'del Rojo', 'del Rojo', 'del Rojo', 'del Rojo',
      'del Hacha', 'del Hacha', 'del Hacha', 'del Hacha', 'Grande', 'Grande', 'Grande', 'Grande',
      'de las Maderas', 'de las Maderas', 'de las Maderas', 'de las Maderas', 'de Abajo', 'de Abajo', 'de Abajo', 'de Abajo',
      'Blanco/a', 'Blanco/a', 'Blanco/a', 'Blanco/a', 'de la Tormenta', 'de la Tormenta', 'de la Tormenta', 'de la Tormenta',
      'Negra/o', 'Negra/o', 'Negra/o', 'Negra/o', 'del Lamento', 'del Lamento', 'del Lamento', 'del Lamento',
      'Nueva/o', 'Nueva/o', 'Nueva/o', 'Nueva/o', 'de Piedra', 'de Piedra', 'de Piedra', 'de Piedra',
      'de la Sombría', 'de la Sombría', 'de la Sombría', 'de la Sombría', 'Perdido/a', 'Perdido/a', 'Perdido/a', 'Perdido/a',
      'de Arriba', 'de Arriba', 'de Arriba', 'de Arriba', 'de la Roca', 'de la Roca', 'de la Roca', 'de la Roca',
      'del Escudo', 'del Escudo', 'del Escudo', 'del Escudo', 'de la Espada', 'de la Espada', 'de la Espada', 'de la Espada',
      'de las Nieves', 'de las Nieves', 'de las Nieves', 'de las Nieves', 'del Espinar', 'del Espinar', 'del Espinar', 'del Espinar',
      'de la Bahía', 'de la Bahía', 'de la Bahía', 'de la Bahía'
    ]
  },

  // Oráculo 16: Acción de combate (01-100, exact from PDF)
  combatAction: [
    'Forzar la rendición', 'Forzar la rendición', 'Forzar la rendición', 'Coordinarse con sus aliados', 'Coordinarse con sus aliados', 'Coordinarse con sus aliados',
    'Reunir refuerzos', 'Reunir refuerzos', 'Reunir refuerzos', 'Hacerse con alguien o algo', 'Hacerse con alguien o algo', 'Hacerse con alguien o algo', 'Hacerse con alguien o algo',
    'Provocar una respuesta imprudente', 'Provocar una respuesta imprudente', 'Provocar una respuesta imprudente', 'Provocar una respuesta imprudente',
    'Intimidar o asustar', 'Intimidar o asustar', 'Intimidar o asustar', 'Intimidar o asustar',
    'Revelar una verdad inesperada', 'Revelar una verdad inesperada', 'Revelar una verdad inesperada', 'Revelar una verdad inesperada',
    'Cambiar de objetivo, centrándose en alguien o algo nuevo', 'Cambiar de objetivo, centrándose en alguien o algo nuevo', 'Cambiar de objetivo, centrándose en alguien o algo nuevo', 'Cambiar de objetivo, centrándose en alguien o algo nuevo',
    'Destruir o inutilizar algo', 'Destruir o inutilizar algo', 'Destruir o inutilizar algo', 'Destruir o inutilizar algo',
    'Llevar a cabo una acción decisiva', 'Llevar a cabo una acción decisiva', 'Llevar a cabo una acción decisiva', 'Llevar a cabo una acción decisiva', 'Llevar a cabo una acción decisiva', 'Llevar a cabo una acción decisiva',
    'Reforzar las defensas', 'Reforzar las defensas', 'Reforzar las defensas', 'Reforzar las defensas', 'Reforzar las defensas', 'Reforzar las defensas',
    'Preparar una acción', 'Preparar una acción', 'Preparar una acción', 'Preparar una acción', 'Preparar una acción', 'Preparar una acción', 'Preparar una acción',
    'Usar el terreno de forma ventajosa', 'Usar el terreno de forma ventajosa', 'Usar el terreno de forma ventajosa', 'Usar el terreno de forma ventajosa', 'Usar el terreno de forma ventajosa', 'Usar el terreno de forma ventajosa', 'Usar el terreno de forma ventajosa', 'Usar el terreno de forma ventajosa',
    'Sacar provecho de la ventaja que le da una de sus armas o capacidades', 'Sacar provecho de la ventaja que le da una de sus armas o capacidades', 'Sacar provecho de la ventaja que le da una de sus armas o capacidades', 'Sacar provecho de la ventaja que le da una de sus armas o capacidades', 'Sacar provecho de la ventaja que le da una de sus armas o capacidades', 'Sacar provecho de la ventaja que le da una de sus armas o capacidades', 'Sacar provecho de la ventaja que le da una de sus armas o capacidades', 'Sacar provecho de la ventaja que le da una de sus armas o capacidades',
    'Crear una oportunidad', 'Crear una oportunidad', 'Crear una oportunidad', 'Crear una oportunidad', 'Crear una oportunidad', 'Crear una oportunidad', 'Crear una oportunidad', 'Crear una oportunidad', 'Crear una oportunidad', 'Crear una oportunidad',
    'Atacar con precisión', 'Atacar con precisión', 'Atacar con precisión', 'Atacar con precisión', 'Atacar con precisión', 'Atacar con precisión', 'Atacar con precisión', 'Atacar con precisión', 'Atacar con precisión', 'Atacar con precisión', 'Atacar con precisión',
    'Atacar con potencia', 'Atacar con potencia', 'Atacar con potencia', 'Atacar con potencia', 'Atacar con potencia', 'Atacar con potencia', 'Atacar con potencia', 'Atacar con potencia', 'Atacar con potencia', 'Atacar con potencia',
    'Hacer algo completamente inesperado'
  ],

  // Oráculo 17: Consecuencias de un fallo con las artes místicas (01-100, exact from PDF)
  mysticBacklash: [
    'Tu ritual produce el efecto opuesto al esperado', 'Tu ritual produce el efecto opuesto al esperado', 'Tu ritual produce el efecto opuesto al esperado', 'Tu ritual produce el efecto opuesto al esperado',
    'El ritual te debilita. Quedas débil sin apenas fuerzas', 'El ritual te debilita. Quedas débil sin apenas fuerzas', 'El ritual te debilita. Quedas débil sin apenas fuerzas', 'El ritual te debilita. Quedas débil sin apenas fuerzas',
    'Un personaje aliado, una amistad o un compañero se ve afectado de forma negativa por el ritual', 'Un personaje aliado, una amistad o un compañero se ve afectado de forma negativa por el ritual', 'Un personaje aliado, una amistad o un compañero se ve afectado de forma negativa por el ritual', 'Un personaje aliado, una amistad o un compañero se ve afectado de forma negativa por el ritual',
    'Destruyes un objeto importante', 'Destruyes un objeto importante', 'Destruyes un objeto importante', 'Destruyes un objeto importante',
    'Por error, invocas una abominación', 'Por error, invocas una abominación', 'Por error, invocas una abominación', 'Por error, invocas una abominación',
    'Te derrumbas. Te pierdes en un sueño lleno de pesadillas', 'Te derrumbas. Te pierdes en un sueño lleno de pesadillas', 'Te derrumbas. Te pierdes en un sueño lleno de pesadillas', 'Te derrumbas. Te pierdes en un sueño lleno de pesadillas',
    'Sufres un tormento físico que te deja su huella', 'Sufres un tormento físico que te deja su huella', 'Sufres un tormento físico que te deja su huella', 'Sufres un tormento físico que te deja su huella',
    'Escuchas voces espectrales que te susurran al oído oscuros presagios', 'Escuchas voces espectrales que te susurran al oído oscuros presagios', 'Escuchas voces espectrales que te susurran al oído oscuros presagios', 'Escuchas voces espectrales que te susurran al oído oscuros presagios',
    'Te pierdes entre las sombras y acabas en otro lugar distinto. No recuerdas cómo has llegado allí', 'Te pierdes entre las sombras y acabas en otro lugar distinto. No recuerdas cómo has llegado allí', 'Te pierdes entre las sombras y acabas en otro lugar distinto. No recuerdas cómo has llegado allí', 'Te pierdes entre las sombras y acabas en otro lugar distinto. No recuerdas cómo has llegado allí',
    'Alertas a alguien o a algo de tu presencia', 'Alertas a alguien o a algo de tu presencia', 'Alertas a alguien o a algo de tu presencia', 'Alertas a alguien o a algo de tu presencia',
    'Algo toma el control y actúas en contra de un personaje aliado, amigo o compañero', 'Algo toma el control y actúas en contra de un personaje aliado, amigo o compañero', 'Algo toma el control y actúas en contra de un personaje aliado, amigo o compañero', 'Algo toma el control y actúas en contra de un personaje aliado, amigo o compañero',
    'Los alrededores se ven afectados o dañados por el ritual, lo que provoca un problema', 'Los alrededores se ven afectados o dañados por el ritual, lo que provoca un problema', 'Los alrededores se ven afectados o dañados por el ritual, lo que provoca un problema', 'Los alrededores se ven afectados o dañados por el ritual, lo que provoca un problema',
    'Se malgastan bienes (medios, equipo o riqueza)', 'Se malgastan bienes (medios, equipo o riqueza)', 'Se malgastan bienes (medios, equipo o riqueza)', 'Se malgastan bienes (medios, equipo o riqueza)',
    'Pierdes un sentido durante varias horas', 'Pierdes un sentido durante varias horas', 'Pierdes un sentido durante varias horas', 'Pierdes un sentido durante varias horas',
    'Pierdes tu conexión con la magia durante un día más o menos. Mientras tanto, no puedes realizar rituales', 'Pierdes tu conexión con la magia durante un día más o menos. Mientras tanto, no puedes realizar rituales', 'Pierdes tu conexión con la magia durante un día más o menos. Mientras tanto, no puedes realizar rituales', 'Pierdes tu conexión con la magia durante un día más o menos. Mientras tanto, no puedes realizar rituales',
    'Tu ritual afecta al objetivo de una forma inesperada y problemática', 'Tu ritual afecta al objetivo de una forma inesperada y problemática', 'Tu ritual afecta al objetivo de una forma inesperada y problemática', 'Tu ritual afecta al objetivo de una forma inesperada y problemática',
    'Tu ritual revela una verdad sorprendente y perturbadora', 'Tu ritual revela una verdad sorprendente y perturbadora', 'Tu ritual revela una verdad sorprendente y perturbadora', 'Tu ritual revela una verdad sorprendente y perturbadora',
    'Los poderes oscuros te tientan', 'Los poderes oscuros te tientan', 'Los poderes oscuros te tientan', 'Los poderes oscuros te tientan',
    'Tienes una inquietante visión de tu futuro', 'Tienes una inquietante visión de tu futuro', 'Tienes una inquietante visión de tu futuro', 'Tienes una inquietante visión de tu futuro',
    'No puedes volver a realizar este ritual hasta que adquieras un importante componente', 'No puedes volver a realizar este ritual hasta que adquieras un importante componente', 'No puedes volver a realizar este ritual hasta que adquieras un importante componente', 'No puedes volver a realizar este ritual hasta que adquieras un importante componente',
    'Desarrollas un extraño miedo o compulsión', 'Desarrollas un extraño miedo o compulsión', 'Desarrollas un extraño miedo o compulsión', 'Desarrollas un extraño miedo o compulsión',
    'Tu ritual provoca que las criaturas muestren un comportamiento extraño o agresivo', 'Tu ritual provoca que las criaturas muestren un comportamiento extraño o agresivo', 'Tu ritual provoca que las criaturas muestren un comportamiento extraño o agresivo', 'Tu ritual provoca que las criaturas muestren un comportamiento extraño o agresivo',
    'Te atormenta una aparición de tu pasado', 'Te atormenta una aparición de tu pasado', 'Te atormenta una aparición de tu pasado', 'Te atormenta una aparición de tu pasado',
    'Sufres una repentina enfermedad', 'Sufres una repentina enfermedad', 'Sufres una repentina enfermedad', 'Sufres una repentina enfermedad',
    'Tira dos veces en esta tabla y aplica ambos resultados. Si sacas dos veces el mismo resultado, agrava los efectos', 'Tira dos veces en esta tabla y aplica ambos resultados. Si sacas dos veces el mismo resultado, agrava los efectos', 'Tira dos veces en esta tabla y aplica ambos resultados. Si sacas dos veces el mismo resultado, agrava los efectos', 'Tira dos veces en esta tabla y aplica ambos resultados. Si sacas dos veces el mismo resultado, agrava los efectos'
  ],

  // Oráculo 19: Nivel de desafío (01-100, exact from PDF)
  challengeRank: [
    'Problemático', 'Problemático', 'Problemático', 'Problemático', 'Problemático', 'Problemático', 'Problemático', 'Problemático', 'Problemático', 'Problemático',
    'Problemático', 'Problemático', 'Problemático', 'Problemático', 'Problemático', 'Problemático', 'Problemático', 'Problemático', 'Problemático', 'Problemático',
    'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso',
    'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso',
    'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso',
    'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso', 'Peligroso', 'Formidable', 'Formidable', 'Formidable', 'Formidable', 'Formidable',
    'Formidable', 'Formidable', 'Formidable', 'Formidable', 'Formidable', 'Formidable', 'Formidable', 'Formidable', 'Formidable', 'Formidable',
    'Formidable', 'Formidable', 'Formidable', 'Formidable', 'Formidable', 'Formidable', 'Formidable', 'Formidable', 'Formidable', 'Formidable',
    'Extremo', 'Extremo', 'Extremo', 'Extremo', 'Extremo', 'Extremo', 'Extremo', 'Extremo', 'Extremo', 'Extremo', 'Extremo', 'Extremo', 'Extremo',
    'Épico', 'Épico', 'Épico', 'Épico', 'Épico', 'Épico', 'Épico'
  ]
};

// Moves data based on Ironsworn Spanish edition
export const movesData = {
  adventure: [
    {
      name: 'Afrontar el Peligro',
      description: 'Cuando emprendes una acción arriesgada o reaccionas ante una amenaza inminente.',
      stats: ['Filo', 'Corazón', 'Hierro', 'Sombra', 'Astucia'],
      results: {
        strong: 'Tienes éxito. Toma +1 impulso.',
        weak: 'Tienes éxito, pero afrontas una nueva complicación. Elige una: +1 impulso pero pagas el precio; tienes éxito y el precio es menor.',
        miss: 'Pagas el precio. Tu acción tiene consecuencias desafortunadas.'
      }
    },
    {
      name: 'Curar',
      description: 'Cuando buscas tratamiento para una herida, una dolencia o una enfermedad.',
      stats: ['Hierro', 'Astucia'],
      results: {
        strong: 'Tu salud se restablece. Toma +2 salud.',
        weak: 'Tu salud se restablece. Toma +1 salud.',
        miss: 'Tu herida empeora o el tratamiento fracasa. Pierde -1 salud.'
      }
    },
    {
      name: 'Viajar',
      description: 'Cuando viajas por las Tierras del Hierro hacia un destino distante.',
      stats: ['Filo', 'Astucia'],
      results: {
        strong: 'Llegas sin problemas. Toma +1 impulso si el viaje era peligroso.',
        weak: 'Llegas, pero el viaje fue problemático. Elige una: pierdes -1 suministros; el viaje lleva más tiempo del esperado.',
        miss: 'Te encuentras con peligros en el camino o te has perdido.'
      }
    },
    {
      name: 'Reunir Información',
      description: 'Cuando buscas pistas, preguntas, investigas o sigues un rastro.',
      stats: ['Sombra', 'Astucia'],
      results: {
        strong: 'Descubres algo útil. Toma +2 impulso.',
        weak: 'Descubres algo útil, pero esto también revela un peligro o complicación.',
        miss: 'Tu investigación te lleva por mal camino, consume tiempo o atrae problemas.'
      }
    },
    {
      name: 'Crear una Ventaja',
      description: 'Cuando actúas para conseguir algún beneficio o mejorar tu posición.',
      stats: ['Cualquiera'],
      results: {
        strong: 'Toma +1 impulso. Puedes usar esta ventaja más tarde para conseguir +1 en tu tirada.',
        weak: 'Toma +1 impulso.',
        miss: 'No consigues ventaja y tal vez crees nuevas complicaciones.'
      }
    },
    {
      name: 'Acampar',
      description: 'Cuando te tomas tiempo para descansar en territorio peligroso.',
      stats: ['Suministros'],
      results: {
        strong: 'Eliges dos: recuperas +1 en todos los contadores de condición; ganas +1 impulso; tu compañero recupera +1 salud.',
        weak: 'Eliges uno de los anteriores.',
        miss: 'Tu descanso es interrumpido. Paga el precio.'
      }
    }
  ],
  relationship: [
    {
      name: 'Persuadir',
      description: 'Cuando intentas persuadir a alguien para que haga algo.',
      stats: ['Corazón', 'Sombra'],
      results: {
        strong: 'Te escuchan y actúan como esperabas. Toma +1 impulso.',
        weak: 'Te escuchan, pero piden algo a cambio o exigen una prueba de tu sinceridad.',
        miss: 'Se niegan, reaccionan mal o te malinterpretan. Paga el precio.'
      }
    },
    {
      name: 'Forjar un Vínculo',
      description: 'Cuando pasas tiempo significativo con una persona o comunidad y desarrollas una relación.',
      stats: ['Corazón'],
      results: {
        strong: 'Establecéis un vínculo fuerte. Anótalo y toma +1 impulso.',
        weak: 'Establecéis un vínculo, pero es frágil o limitado de alguna manera.',
        miss: 'Malinterpretáis las intenciones del otro o algo interfiere en vuestra relación.'
      }
    },
    {
      name: 'Ayudar a un Aliado',
      description: 'Cuando actúas para ayudar a un aliado.',
      stats: ['Cualquiera'],
      results: {
        strong: 'Tu aliado gana +1 en su tirada. Toma +1 impulso.',
        weak: 'Tu aliado gana +1 en su tirada.',
        miss: 'Tu aliado no recibe bonificación y tú te pones en peligro.'
      }
    },
    {
      name: 'Pasar Tiempo en una Comunidad',
      description: 'Cuando te quedas en una comunidad buscando consuelo, información o suministros.',
      stats: ['Corazón'],
      results: {
        strong: 'Eliges dos: recuperas +2 espíritu; recuperas +1 suministros; recibes información útil.',
        weak: 'Eliges uno de los anteriores.',
        miss: 'Encuentras problemas o la comunidad tiene sus propias dificultades.'
      }
    }
  ],
  combat: [
    {
      name: 'Entrar en Liza',
      description: 'Cuando entras en combate.',
      stats: ['Corazón', 'Astucia'],
      results: {
        strong: 'Toma +2 impulso. Eliges quién actúa primero.',
        weak: 'Eliges quién actúa primero.',
        miss: 'El combate comienza en tu contra. Tu oponente actúa primero.'
      }
    },
    {
      name: 'Golpear',
      description: 'Cuando atacas a un enemigo en combate cuerpo a cuerpo.',
      stats: ['Hierro', 'Filo'],
      results: {
        strong: 'Infliges daño y tomas +1 impulso. Tu enemigo debe Sufrir Daño (1 daño) o quedarse a merced.',
        weak: 'Infliges daño, pero también afrontas peligro. Tu enemigo debe Sufrir Daño (1 daño).',
        miss: 'Tu ataque falla y tu oponente contraataca. Paga el precio.'
      }
    },
    {
      name: 'Disparar',
      description: 'Cuando atacas a un enemigo con un arma a distancia.',
      stats: ['Filo'],
      results: {
        strong: 'Infliges daño y tomas +1 impulso. Tu enemigo debe Sufrir Daño (1 daño).',
        weak: 'Eliges uno: infliges daño; tomas +1 impulso.',
        miss: 'Tu disparo falla o tu arma falla. Paga el precio.'
      }
    },
    {
      name: 'Acabar la Lucha',
      description: 'Cuando tienes la oportunidad de derrotar a un enemigo.',
      stats: ['Progreso del enemigo'],
      results: {
        strong: 'Tu enemigo es derrotado. Toma +1 impulso.',
        weak: 'Tu enemigo es derrotado, pero eliges uno: cuesta tiempo extra; necesitas sacrificar recursos; tienes que sufrir daño.',
        miss: 'Tu enemigo escapa, se recupera o contraataca.'
      }
    },
    {
      name: 'Defenderse',
      description: 'Cuando evitas o proteges contra un ataque.',
      stats: ['Hierro'],
      results: {
        strong: 'Evitas el ataque y encuentras una oportunidad. Toma +1 impulso.',
        weak: 'Evitas lo peor del ataque, pero no totalmente. Sufres -1 daño.',
        miss: 'No logras defenderte. Sufres daño total o paga el precio.'
      }
    }
  ]
};

export const progressRanks = {
  'Peligroso': 10,
  'Formidable': 8,
  'Extremo': 6,
  'Épico': 4
};
