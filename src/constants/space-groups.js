export const BRAVAIS_LATTICE_MAP = {
    en: {
        Triclinic: 'Triclinic',
        Monoclinic: 'Monoclinic',
        Orthorhombic: 'Orthorhombic',
        Tetragonal: 'Tetragonal',
        Trigonal: 'Trigonal',
        Hexagonal: 'Hexagonal',
        Cubic: 'Cubic'
    },
    es: {
        Triclinic: 'Triclínicas',
        Monoclinic: 'Monoclínicas',
        Orthorhombic: 'Ortorrómbico',
        Tetragonal: 'Tetragonal',
        Trigonal: 'Trigonal',
        Hexagonal: 'Hexagonal',
        Cubic: 'Cúbico'
    },
    fr: {
        Triclinic: 'Triclinic',
        Monoclinic: 'Monoclinic',
        Orthorhombic: 'Orthorhombique',
        Tetragonal: 'Tétragonal',
        Trigonal: 'Trigone',
        Hexagonal: 'Hexagonal',
        Cubic: 'Cubique'
    },
    it: {
        Triclinic: 'Triclinico',
        Monoclinic: 'Monoclino',
        Orthorhombic: 'Ortorombico',
        Tetragonal: 'Tetragonale',
        Trigonal: 'Trigonale',
        Hexagonal: 'Esagonale',
        Cubic: 'Cubo'
    }
};

export const SPACE_GROUPS = [
  { id: 'sg1', lattice: 'Triclinic', spacegroup: 'P 1', label: 'P1' },
  { id: 'sg2', lattice: 'Triclinic', spacegroup: 'P -1', label: 'P1\u0305' },
  { id: 'sg3', lattice: 'Monoclinic', spacegroup: 'P 1 2 1', label: 'P2' },
  { id: 'sg4', lattice: 'Monoclinic', spacegroup: 'P 1 21 1', label: 'P2\u2081' },
  { id: 'sg5', lattice: 'Monoclinic', spacegroup: 'C 1 2 1', label: 'C2' },
  { id: 'sg6', lattice: 'Monoclinic', spacegroup: 'P 1 m 1', label: 'Pm' },
  { id: 'sg7', lattice: 'Monoclinic', spacegroup: 'P 1 c 1', label: 'Pc' },
  { id: 'sg8', lattice: 'Monoclinic', spacegroup: 'C 1 m 1', label: 'Cm' },
  { id: 'sg9', lattice: 'Monoclinic', spacegroup: 'C 1 c 1', label: 'Cc' },
  { id: 'sg10', lattice: 'Monoclinic', spacegroup: 'P 1 2/m 1', label: 'P2/m' },
  { id: 'sg11', lattice: 'Monoclinic', spacegroup: 'P 1 21/m 1', label: 'P2\u2081' },
  { id: 'sg12', lattice: 'Monoclinic', spacegroup: 'C 1 2/m 1', label: 'C2/m' },
  { id: 'sg13', lattice: 'Monoclinic', spacegroup: 'P 1 2/c 1', label: 'P2/c' },
  { id: 'sg14', lattice: 'Monoclinic', spacegroup: 'P 1 21/c 1', label: 'P2\u2081/c' },
  { id: 'sg15', lattice: 'Monoclinic', spacegroup: 'C 1 2/c 1', label: 'C2/c' },
  { id: 'sg16', lattice: 'Orthorhombic', spacegroup: 'P 2 2 2', label: 'P222' },
  { id: 'sg17', lattice: 'Orthorhombic', spacegroup: 'P 2 2 21', label: 'P222\u2081' },
  { id: 'sg18', lattice: 'Orthorhombic', spacegroup: 'P 21 21 2', label: 'P2\u20812\u20812' },
  { id: 'sg19', lattice: 'Orthorhombic', spacegroup: 'P 21 21 21', label: 'P2\u20812\u20812\u2081' },
  { id: 'sg20', lattice: 'Orthorhombic', spacegroup: 'C 2 2 21', label: 'C222\u2081' },
  { id: 'sg21', lattice: 'Orthorhombic', spacegroup: 'C 2 2 2', label: 'C222' },
  { id: 'sg22', lattice: 'Orthorhombic', spacegroup: 'F 2 2 2', label: 'F222' },
  { id: 'sg23', lattice: 'Orthorhombic', spacegroup: 'I 2 2 2', label: 'I222' },
  { id: 'sg24', lattice: 'Orthorhombic', spacegroup: 'I 21 21 21', label: 'I2\u20812\u20812\u2081' },
  { id: 'sg25', lattice: 'Orthorhombic', spacegroup: 'P m m 2', label: 'Pmm2' },
  { id: 'sg26', lattice: 'Orthorhombic', spacegroup: 'P m c 21', label: 'Pmc2\u2081' },
  { id: 'sg27', lattice: 'Orthorhombic', spacegroup: 'P c c 2', label: 'Pcc2' },
  { id: 'sg28', lattice: 'Orthorhombic', spacegroup: 'P m a 2', label: 'Pma2' },
  { id: 'sg29', lattice: 'Orthorhombic', spacegroup: 'P c a 21', label: 'Pca2\u2081' },
  { id: 'sg30', lattice: 'Orthorhombic', spacegroup: 'P n c 2', label: 'Pnc2' },
  { id: 'sg31', lattice: 'Orthorhombic', spacegroup: 'P m n 21', label: 'Pmn2\u2081' },
  { id: 'sg32', lattice: 'Orthorhombic', spacegroup: 'P b a 2', label: 'Pba2' },
  { id: 'sg33', lattice: 'Orthorhombic', spacegroup: 'P n a 21', label: 'Pna2\u2081' },
  { id: 'sg34', lattice: 'Orthorhombic', spacegroup: 'P n n 2', label: 'Pnn2' },
  { id: 'sg35', lattice: 'Orthorhombic', spacegroup: 'C m m 2', label: 'Cmm2' },
  { id: 'sg36', lattice: 'Orthorhombic', spacegroup: 'C m c 21', label: 'Cmc2\u2081' },
  { id: 'sg37', lattice: 'Orthorhombic', spacegroup: 'C c c 2', label: 'Ccc2' },
  { id: 'sg38', lattice: 'Orthorhombic', spacegroup: 'A m m 2', label: 'Amm2' },
  { id: 'sg39', lattice: 'Orthorhombic', spacegroup: 'A b m 2', label: 'Aem2' },
  { id: 'sg40', lattice: 'Orthorhombic', spacegroup: 'A m a 2', label: 'Ama2' },
  { id: 'sg41', lattice: 'Orthorhombic', spacegroup: 'A b a 2', label: 'Aea2' },
  { id: 'sg42', lattice: 'Orthorhombic', spacegroup: 'F m m 2', label: 'Fmm2' },
  { id: 'sg43', lattice: 'Orthorhombic', spacegroup: 'F d d 2', label: 'Fdd2' },
  { id: 'sg44', lattice: 'Orthorhombic', spacegroup: 'I m m 2', label: 'Imm2' },
  { id: 'sg45', lattice: 'Orthorhombic', spacegroup: 'I b a 2', label: 'Iba2' },
  { id: 'sg46', lattice: 'Orthorhombic', spacegroup: 'I m a 2', label: 'Ima2' },
  { id: 'sg47', lattice: 'Orthorhombic', spacegroup: 'P 2/m 2/m 2/m', label: 'Pmmm' },
  { id: 'sg48', lattice: 'Orthorhombic', spacegroup: 'P 2/n 2/n 2/n', label: 'Pnnn' },
  { id: 'sg49', lattice: 'Orthorhombic', spacegroup: 'P 2/c 2/c 2/m', label: 'Pccm' },
  { id: 'sg50', lattice: 'Orthorhombic', spacegroup: 'P 2/b 2/a 2/n', label: 'Pban' },
  { id: 'sg51', lattice: 'Orthorhombic', spacegroup: 'P 21/m 2/m 2/a', label: 'Pmma' },
  { id: 'sg52', lattice: 'Orthorhombic', spacegroup: 'P 2/n 21/n 2/a', label: 'Pnna' },
  { id: 'sg53', lattice: 'Orthorhombic', spacegroup: 'P 2/m 2/n 2/a', label: 'Pmna' },
  { id: 'sg54', lattice: 'Orthorhombic', spacegroup: 'P 21/c 2/c 2/a', label: 'Pcca' },
  { id: 'sg55', lattice: 'Orthorhombic', spacegroup: 'P 21/b 21/a 2/m', label: 'Pbam' },
  { id: 'sg56', lattice: 'Orthorhombic', spacegroup: 'P 21/c 21/c 2/n', label: 'Pccn' },
  { id: 'sg57', lattice: 'Orthorhombic', spacegroup: 'P 2/b 21/c 21/m', label: 'Pbcm' },
  { id: 'sg58', lattice: 'Orthorhombic', spacegroup: 'P 21/n 21/n 2/m', label: 'Pnnm' },
  { id: 'sg59', lattice: 'Orthorhombic', spacegroup: 'P 21/m 21/m 2/n', label: 'Pmmn' },
  { id: 'sg60', lattice: 'Orthorhombic', spacegroup: 'P 21/b 21/c 21/n', label: 'Pbcn' },
  { id: 'sg61', lattice: 'Orthorhombic', spacegroup: 'P 21/b 21/c 21/a', label: 'Pbca' },
  { id: 'sg62', lattice: 'Orthorhombic', spacegroup: 'P 21/n 21/m 21/a', label: 'Pnma' },
  { id: 'sg63', lattice: 'Orthorhombic', spacegroup: 'C 2/m 2/c 2/m', label: 'Cmcm' },
  { id: 'sg64', lattice: 'Orthorhombic', spacegroup: 'C 2/m 2/c 21/a', label: 'Cmce' },
  { id: 'sg65', lattice: 'Orthorhombic', spacegroup: 'C 2/m 2/m 2/m', label: 'Cmmm' },
  { id: 'sg66', lattice: 'Orthorhombic', spacegroup: 'C 2/c 2/c 2/m', label: 'Cccm' },
  { id: 'sg67', lattice: 'Orthorhombic', spacegroup: 'C 2/m 2/m 2/e', label: 'Cmme' },
  { id: 'sg68', lattice: 'Orthorhombic', spacegroup: 'C 2/c 2/c 2/e', label: 'Ccce' },
  { id: 'sg69', lattice: 'Orthorhombic', spacegroup: 'F 2/m 2/m 2/m', label: 'Fmmm' },
  { id: 'sg70', lattice: 'Orthorhombic', spacegroup: 'F 2/d 2/d 2/d', label: 'Fddd' },
  { id: 'sg71', lattice: 'Orthorhombic', spacegroup: 'I 2/m 2/m 2/m', label: 'Immm' },
  { id: 'sg72', lattice: 'Orthorhombic', spacegroup: 'I 2/b 2/a 2/m', label: 'Ibam' },
  { id: 'sg73', lattice: 'Orthorhombic', spacegroup: 'I 2/b 2/c 2/a', label: 'Ibca' },
  { id: 'sg74', lattice: 'Orthorhombic', spacegroup: 'I 2/m 2/m 2/a', label: 'Imma' },
  { id: 'sg75', lattice: 'Tetragonal', spacegroup: 'P 4', label: 'P4' },
  { id: 'sg76', lattice: 'Tetragonal', spacegroup: 'P 41', label: 'P4\u2081' },
  { id: 'sg77', lattice: 'Tetragonal', spacegroup: 'P 42', label: 'P4\u2082' },
  { id: 'sg78', lattice: 'Tetragonal', spacegroup: 'P 43', label: 'P4\u2083' },
  { id: 'sg79', lattice: 'Tetragonal', spacegroup: 'I 4', label: 'I4' },
  { id: 'sg80', lattice: 'Tetragonal', spacegroup: 'I 41', label: 'I4\u2081' },
  { id: 'sg81', lattice: 'Tetragonal', spacegroup: 'P -4', label: 'P4\u0305' },
  { id: 'sg82', lattice: 'Tetragonal', spacegroup: 'I -4', label: 'I4\u0305' },
  { id: 'sg83', lattice: 'Tetragonal', spacegroup: 'P 4/m', label: 'P4/m' },
  { id: 'sg84', lattice: 'Tetragonal', spacegroup: 'P 42/m', label: 'P4\u2082/m' },
  { id: 'sg85', lattice: 'Tetragonal', spacegroup: 'P 4/n', label: 'P4/n' },
  { id: 'sg86', lattice: 'Tetragonal', spacegroup: 'P 42/n', label: 'P4\u2082/n' },
  { id: 'sg87', lattice: 'Tetragonal', spacegroup: 'I 4/m', label: 'I4/m' },
  { id: 'sg88', lattice: 'Tetragonal', spacegroup: 'I 41/a', label: 'I4\u2081/a' },
  { id: 'sg89', lattice: 'Tetragonal', spacegroup: 'P 4 2 2', label: 'P4222' },
  { id: 'sg90', lattice: 'Tetragonal', spacegroup: 'P 4 21 2', label: 'P42\u20812' },
  { id: 'sg91', lattice: 'Tetragonal', spacegroup: 'P 41 2 2', label: 'P4\u208122' },
  { id: 'sg92', lattice: 'Tetragonal', spacegroup: 'P 41 21 2', label: 'P4\u20812\u20812' },
  { id: 'sg93', lattice: 'Tetragonal', spacegroup: 'P 42 2 2', label: 'P4\u208222' },
  { id: 'sg94', lattice: 'Tetragonal', spacegroup: 'P 42 21 2', label: 'P4\u20822\u20812' },
  { id: 'sg95', lattice: 'Tetragonal', spacegroup: 'P 43 2 2', label: 'P4\u208322' },
  { id: 'sg96', lattice: 'Tetragonal', spacegroup: 'P 43 21 2', label: 'P4\u20832\u20812' },
  { id: 'sg97', lattice: 'Tetragonal', spacegroup: 'I 4 2 2', label: 'I422' },
  { id: 'sg98', lattice: 'Tetragonal', spacegroup: 'I 41 2 2', label: 'I4\u208122' },
  { id: 'sg99', lattice: 'Tetragonal', spacegroup: 'P 4 m m', label: 'P4mm' },
  { id: 'sg100', lattice: 'Tetragonal', spacegroup: 'P 4 b m', label: 'P4bm' },
  { id: 'sg101', lattice: 'Tetragonal', spacegroup: 'P 42 c m', label: 'P4\u2082cm' },
  { id: 'sg102', lattice: 'Tetragonal', spacegroup: 'P 42 n m', label: 'P4\u2082nm' },
  { id: 'sg103', lattice: 'Tetragonal', spacegroup: 'P 4 c c', label: 'P4cc' },
  { id: 'sg104', lattice: 'Tetragonal', spacegroup: 'P 4 n c', label: 'P4nc' },
  { id: 'sg105', lattice: 'Tetragonal', spacegroup: 'P 42 m c', label: 'P4\u2082mc' },
  { id: 'sg106', lattice: 'Tetragonal', spacegroup: 'P 42 b c', label: 'P4\u2082bc' },
  { id: 'sg107', lattice: 'Tetragonal', spacegroup: 'I 4 m m', label: 'I4mm' },
  { id: 'sg108', lattice: 'Tetragonal', spacegroup: 'I 4 c m', label: 'I4cm' },
  { id: 'sg109', lattice: 'Tetragonal', spacegroup: 'I 41 m d', label: 'I4\u2081md' },
  { id: 'sg110', lattice: 'Tetragonal', spacegroup: 'I 41 c d', label: 'I4\u2081cd' },
  { id: 'sg111', lattice: 'Tetragonal', spacegroup: 'P -4 2 m', label: 'P4\u03052m' },
  { id: 'sg112', lattice: 'Tetragonal', spacegroup: 'P -4 2 c', label: 'P4\u03052c' },
  { id: 'sg113', lattice: 'Tetragonal', spacegroup: 'P -4 21 m', label: 'P4\u03052\u2081m' },
  { id: 'sg114', lattice: 'Tetragonal', spacegroup: 'P -4 21 c', label: 'P4\u03052\u2081c' },
  { id: 'sg115', lattice: 'Tetragonal', spacegroup: 'P -4 m 2', label: 'P4\u0305m2' },
  { id: 'sg116', lattice: 'Tetragonal', spacegroup: 'P -4 c 2', label: 'P4\u0305c2' },
  { id: 'sg117', lattice: 'Tetragonal', spacegroup: 'P -4 b 2', label: 'P4\u0305b2' },
  { id: 'sg118', lattice: 'Tetragonal', spacegroup: 'P -4 n 2', label: 'P4\u0305n2' },
  { id: 'sg119', lattice: 'Tetragonal', spacegroup: 'I -4 m 2', label: 'I4\u0305m2' },
  { id: 'sg120', lattice: 'Tetragonal', spacegroup: 'I -4 c 2', label: 'I4\u0305c2' },
  { id: 'sg121', lattice: 'Tetragonal', spacegroup: 'I -4 2 m', label: 'I4\u03052m' },
  { id: 'sg122', lattice: 'Tetragonal', spacegroup: 'I -4 2 d', label: 'I4\u03052d' },
  { id: 'sg123', lattice: 'Tetragonal', spacegroup: 'P 4/m 2/m 2/m', label: 'P4/mmm' },
  { id: 'sg124', lattice: 'Tetragonal', spacegroup: 'P 4/m 2/c 2/c', label: 'P4/mcc' },
  { id: 'sg125', lattice: 'Tetragonal', spacegroup: 'P 4/n 2/b 2/m', label: 'P4/nbm' },
  { id: 'sg126', lattice: 'Tetragonal', spacegroup: 'P 4/n 2/n 2/c', label: 'P4/nnc' },
  { id: 'sg127', lattice: 'Tetragonal', spacegroup: 'P 4/m 2/b 2/m', label: 'P4/mbm' },
  { id: 'sg128', lattice: 'Tetragonal', spacegroup: 'P 4/m 2/n 2/c', label: 'P4/mnc' },
  { id: 'sg129', lattice: 'Tetragonal', spacegroup: 'P 4/n 2/m 2/m', label: 'P4/nmm' },
  { id: 'sg130', lattice: 'Tetragonal', spacegroup: 'P 4/n 2/c 2/c', label: 'P4/ncc' },
  { id: 'sg131', lattice: 'Tetragonal', spacegroup: 'P 42/m 2/m 2/c', label: 'P4\u2082/mmc' },
  { id: 'sg132', lattice: 'Tetragonal', spacegroup: 'P 42/m 2/c 2/m', label: 'P4\u2082/mcm' },
  { id: 'sg133', lattice: 'Tetragonal', spacegroup: 'P 42/n 2/b 2/c', label: 'P4\u2082/nbc' },
  { id: 'sg134', lattice: 'Tetragonal', spacegroup: 'P 42/n 2/n 2/m', label: 'P4\u2082/nnm' },
  { id: 'sg135', lattice: 'Tetragonal', spacegroup: 'P 42/m 2/b 2/c', label: 'P4\u2082/mbc' },
  { id: 'sg136', lattice: 'Tetragonal', spacegroup: 'P 42/m 2/n 2/m', label: 'P4\u2082/mnm' },
  { id: 'sg137', lattice: 'Tetragonal', spacegroup: 'P 42/n 2/m 2/c', label: 'P4\u2082/nmc' },
  { id: 'sg138', lattice: 'Tetragonal', spacegroup: 'P 42/n 2/c 2/m', label: 'P4\u2082/ncm' },
  { id: 'sg139', lattice: 'Tetragonal', spacegroup: 'I 4/m 2/m 2/m', label: 'I4/mmm' },
  { id: 'sg140', lattice: 'Tetragonal', spacegroup: 'I4/m 2/c 2/m', label: 'I4/mcm' },
  { id: 'sg141', lattice: 'Tetragonal', spacegroup: 'I 41/a 2/m 2/d', label: 'I4\u2081/amd' },
  { id: 'sg142', lattice: 'Tetragonal', spacegroup: 'I 41/a 2/c 2/d', label: 'I4\u2081/acd' },
  { id: 'sg143', lattice: 'Trigonal', spacegroup: 'P 3', label: 'P3' },
  { id: 'sg144', lattice: 'Trigonal', spacegroup: 'P 31', label: 'P3\u2081' },
  { id: 'sg145', lattice: 'Trigonal', spacegroup: 'P 32', label: 'P3\u2082' },
  { id: 'sg146', lattice: 'Trigonal', spacegroup: 'R 3', label: 'R3' },
  { id: 'sg147', lattice: 'Trigonal', spacegroup: 'P -3', label: 'P3\u0305' },
  { id: 'sg148', lattice: 'Trigonal', spacegroup: 'R -3', label: 'P3\u0305' },
  { id: 'sg149', lattice: 'Trigonal', spacegroup: 'P 3 1 2', label: 'P312' },
  { id: 'sg150', lattice: 'Trigonal', spacegroup: 'P 3 2 1', label: 'P321' },
  { id: 'sg151', lattice: 'Trigonal', spacegroup: 'P 31 1 2', label: 'P\u208112' },
  { id: 'sg152', lattice: 'Trigonal', spacegroup: 'P 31 2 1', label: 'P3\u208121' },
  { id: 'sg153', lattice: 'Trigonal', spacegroup: 'P 32 1 2', label: 'P3\u208212' },
  { id: 'sg154', lattice: 'Trigonal', spacegroup: 'P 32 2 1', label: 'P3\u208221' },
  { id: 'sg155', lattice: 'Trigonal', spacegroup: 'R 3 2', label: 'R32' },
  { id: 'sg156', lattice: 'Trigonal', spacegroup: 'P 3 m 1', label: 'P3m1' },
  { id: 'sg157', lattice: 'Trigonal', spacegroup: 'P 3 1 m', label: 'P31m' },
  { id: 'sg158', lattice: 'Trigonal', spacegroup: 'P 3 c 1', label: 'P3c1' },
  { id: 'sg159', lattice: 'Trigonal', spacegroup: 'P 3 1 c', label: 'P31c' },
  { id: 'sg160', lattice: 'Trigonal', spacegroup: 'R 3 m', label: 'R3m' },
  { id: 'sg161', lattice: 'Trigonal', spacegroup: 'R 3 c', label: 'R3c' },
  { id: 'sg162', lattice: 'Trigonal', spacegroup: 'P -3 1 2/m', label: 'P3\u03051m' },
  { id: 'sg163', lattice: 'Trigonal', spacegroup: 'P -3 1 2/c', label: 'P3\u03051c' },
  { id: 'sg164', lattice: 'Trigonal', spacegroup: 'P -3 2/m 1', label: 'P3\u0305m1' },
  { id: 'sg165', lattice: 'Trigonal', spacegroup: 'P -3 2/c 1', label: 'P3\u0305c1' },
  { id: 'sg166', lattice: 'Trigonal', spacegroup: 'R -3 2/m', label: 'R3\u0305m' },
  { id: 'sg167', lattice: 'Trigonal', spacegroup: 'R -3 2/c', label: 'R3\u0305c' },
  { id: 'sg168', lattice: 'Hexagonal', spacegroup: 'P 6', label: 'P6' },
  { id: 'sg169', lattice: 'Hexagonal', spacegroup: 'P 61', label: 'P6\u2081' },
  { id: 'sg170', lattice: 'Hexagonal', spacegroup: 'P 65', label: 'P6\u2085' },
  { id: 'sg171', lattice: 'Hexagonal', spacegroup: 'P 62', label: 'P6\u2082' },
  { id: 'sg172', lattice: 'Hexagonal', spacegroup: 'P 64', label: 'P6\u2084' },
  { id: 'sg173', lattice: 'Hexagonal', spacegroup: 'P 63', label: 'P6\u2083' },
  { id: 'sg174', lattice: 'Hexagonal', spacegroup: 'P -6', label: 'P6\u0305' },
  { id: 'sg175', lattice: 'Hexagonal', spacegroup: 'P 6/m', label: 'P6/m' },
  { id: 'sg176', lattice: 'Hexagonal', spacegroup: 'P 63 m', label: 'P6\u2083/m' },
  { id: 'sg177', lattice: 'Hexagonal', spacegroup: 'P 6 2 2', label: 'P622' },
  { id: 'sg178', lattice: 'Hexagonal', spacegroup: 'P 61 2 2', label: 'P6\u208122' },
  { id: 'sg179', lattice: 'Hexagonal', spacegroup: 'P 65 2 2', label: 'P6\u208522' },
  { id: 'sg180', lattice: 'Hexagonal', spacegroup: 'P 62 2 2', label: 'P6\u208222' },
  { id: 'sg181', lattice: 'Hexagonal', spacegroup: 'P 64 2 2', label: 'P6\u208422' },
  { id: 'sg182', lattice: 'Hexagonal', spacegroup: 'P 63 2 2', label: 'P6\u208322' },
  { id: 'sg183', lattice: 'Hexagonal', spacegroup: 'P 6 m m', label: 'P6mm' },
  { id: 'sg184', lattice: 'Hexagonal', spacegroup: 'P 6 c c', label: 'P6cc' },
  { id: 'sg185', lattice: 'Hexagonal', spacegroup: 'P 63 c m', label: 'P6\u2083cm' },
  { id: 'sg186', lattice: 'Hexagonal', spacegroup: 'P 63 m c', label: 'P6\u2083mc' },
  { id: 'sg187', lattice: 'Hexagonal', spacegroup: 'P -6 m 2', label: 'P6\u0305m2' },
  { id: 'sg188', lattice: 'Hexagonal', spacegroup: 'P -6 c 2', label: 'P6\u0305c2' },
  { id: 'sg189', lattice: 'Hexagonal', spacegroup: 'P -6 2 m', label: 'P6\u03052m' },
  { id: 'sg190', lattice: 'Hexagonal', spacegroup: 'P -6 2 c', label: 'P6\u03052c' },
  { id: 'sg191', lattice: 'Hexagonal', spacegroup: 'P 6/m 2/m 2/m', label: 'P6/mmm' },
  { id: 'sg192', lattice: 'Hexagonal', spacegroup: 'P 6/m 2/c 2/c', label: 'P6/mcc' },
  { id: 'sg193', lattice: 'Hexagonal', spacegroup: 'P 63/m 2/c 2/m', label: 'P6\u2083/mcm' },
  { id: 'sg194', lattice: 'Hexagonal', spacegroup: 'P 6/m 2/m 2/c', label: 'P6\u2083/mmc' },
  { id: 'sg195', lattice: 'Cubic', spacegroup: 'P 2 3', label: 'P23'},
  { id: 'sg196', lattice: 'Cubic', spacegroup: 'F 2 3', label: 'F23'},
  { id: 'sg197', lattice: 'Cubic', spacegroup: 'I 2 3', label: 'I23'},
  { id: 'sg198', lattice: 'Cubic', spacegroup: 'P 21 3', label: 'P2\u20813'},
  { id: 'sg199', lattice: 'Cubic', spacegroup: 'I 21 3', label: 'I2\u20813'},
  { id: 'sg200', lattice: 'Cubic', spacegroup: 'P 2/m -3', label: 'Pm3\u2083'},
  { id: 'sg201', lattice: 'Cubic', spacegroup: 'P 2/n -3', label: 'Pn3\u2083'},
  { id: 'sg202', lattice: 'Cubic', spacegroup: 'F 2/m -3', label: 'Fm3\u2083'},
  { id: 'sg203', lattice: 'Cubic', spacegroup: 'F 2/d -3', label: 'Fd3\u2083'},
  { id: 'sg204', lattice: 'Cubic', spacegroup: 'I 2/m -3', label: 'Im3\u2083'},
  { id: 'sg205', lattice: 'Cubic', spacegroup: 'P 2/a -3', label: 'Pa3\u2083'},
  { id: 'sg206', lattice: 'Cubic', spacegroup: 'I 2/a -3', label: 'Ia3\u2083'},
  { id: 'sg207', lattice: 'Cubic', spacegroup: 'P 4 3 2', label: 'P432'},
  { id: 'sg208', lattice: 'Cubic', spacegroup: 'P 42 3 2', label: 'P4\u208232'},
  { id: 'sg209', lattice: 'Cubic', spacegroup: 'F 4 3 2', label: 'F432'},
  { id: 'sg210', lattice: 'Cubic', spacegroup: 'F 41 3 2', label: 'F4\u208132'},
  { id: 'sg211', lattice: 'Cubic', spacegroup: 'I 4 3 2', label: 'I432'},
  { id: 'sg212', lattice: 'Cubic', spacegroup: 'P 43 3 2', label: 'P4\u208332'},
  { id: 'sg213', lattice: 'Cubic', spacegroup: 'P 41 3 2', label: 'P4\u208132'},
  { id: 'sg214', lattice: 'Cubic', spacegroup: 'I 41 3 2', label: 'P4\u208132'},
  { id: 'sg215', lattice: 'Cubic', spacegroup: 'P -4 3 m', label: 'P4\u03053m'},
  { id: 'sg216', lattice: 'Cubic', spacegroup: 'F -4 3 m', label: 'F4\u03053m'},
  { id: 'sg217', lattice: 'Cubic', spacegroup: 'I -4 3 m', label: 'I4\u03053m'},
  { id: 'sg218', lattice: 'Cubic', spacegroup: 'P -4 3 n', label: 'P4\u03053n'},
  { id: 'sg219', lattice: 'Cubic', spacegroup: 'F -4 3 c', label: 'F4\u03053c'},
  { id: 'sg220', lattice: 'Cubic', spacegroup: 'I -4 3 d', label: 'I4\u03053d'},
  { id: 'sg221', lattice: 'Cubic', spacegroup: 'P 4/m -3 2/m', label: 'Pm3\u0305m'},
  { id: 'sg222', lattice: 'Cubic', spacegroup: 'P 4/n -3 2/n', label: 'Pn3\u0305n'},
  { id: 'sg223', lattice: 'Cubic', spacegroup: 'P 4/m -3 2/n', label: 'Pm3\u0305n'},
  { id: 'sg224', lattice: 'Cubic', spacegroup: 'P 4/n -3 2/m', label: 'Pn3\u0305m'},
  { id: 'sg225', lattice: 'Cubic', spacegroup: 'F 4/m -3 2/m', label: 'Fm3\u0305m'},
  { id: 'sg226', lattice: 'Cubic', spacegroup: 'F 4/m -3 2/c', label: 'Fm3\u0305c'},
  { id: 'sg227', lattice: 'Cubic', spacegroup: 'F 4/d -3 2/m', label: 'Fd3\u0305m'},
  { id: 'sg228', lattice: 'Cubic', spacegroup: 'F 4/d -3 2/c', label: 'Fd3\u0305c'},
  { id: 'sg229', lattice: 'Cubic', spacegroup: 'I 4/m -3 2/m', label: 'Im3\u0305m'},
  { id: 'sg230', lattice: 'Cubic', spacegroup: 'I 4/a -3 2/d', label: 'Ia3\u0305d'}
];

export const SPACE_GROUP_DATA = {
  BRAVAIS_LATTICE_MAP,
  SPACE_GROUPS
};

export default SPACE_GROUP_DATA;
