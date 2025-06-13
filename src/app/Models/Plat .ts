export enum TypePlat {
  Lasagne = 'Lasagne',
  Cannelloni = 'Cannelloni',
  Pates = 'Pâtes',
  Puree = 'Purée',
  Hachis = 'Hachis Parmentier',
  Gratin = 'Gratin',
  Veloute = 'Velouté',
  Quiche = 'Quiche / Tarte',
  Tajine = 'Tajine',
  Galette = 'Galette',
  Salade = 'Salade',
  Soupe = 'Soupe / Bouillon',
  Farci = 'Pommes de terre farcies',
  Cake = 'Cake salé',
  Divers = 'Divers'
}

export interface Plat {
  id: number;
  type: TypePlat;
  nom: string;
  sansViande: boolean;
}

export function getTypePlatLabel(type: TypePlat): string {
  return type; 
}

export const PLATS: Plat[] = [
     // Plats ajoutés : Lasagnes / Cannellonis
  { id: 1, type: TypePlat.Lasagne, nom: 'Lasagne boeuf', sansViande: false },
  { id: 2, type: TypePlat.Lasagne, nom: 'Lasagne chair a saucisse', sansViande: false },
  { id: 3, type: TypePlat.Lasagne, nom: 'Lasagne potimarron chèvre', sansViande: true },
  { id: 4, type: TypePlat.Lasagne, nom: 'Lasagne courgettes oignons chèvre', sansViande: true },
  { id: 5, type: TypePlat.Lasagne, nom: 'Lasagne épinards saumon mascarpone', sansViande: false },

  { id: 6, type: TypePlat.Cannelloni, nom: 'Cannellonis chair à saucisse', sansViande: false },
  { id: 7, type: TypePlat.Cannelloni, nom: 'Cannelloni ricotta / épinards', sansViande: true },
  { id: 8, type: TypePlat.Cannelloni, nom: 'Cannellonis ricotta / épinards / saumon', sansViande: false },
  { id: 9, type: TypePlat.Cannelloni, nom: 'Cannellonis brocolis thon et ricotta', sansViande: false },

  // Pâtes
  { id: 10, type: TypePlat.Pates, nom: 'Pâte aux légumes (courgettes, oignons, ail, carottes, poivrons)', sansViande: true },
  { id: 11, type: TypePlat.Pates, nom: 'Pâtes a la bolognaise', sansViande: false },
  { id: 12, type: TypePlat.Pates, nom: 'Pâtes a la carbonnara', sansViande: false },

  // Purées
  { id: 13, type: TypePlat.Puree, nom: 'Purée de pommes de terre', sansViande: true },
  { id: 14, type: TypePlat.Puree, nom: 'Purée carottes, cumin et chèvre', sansViande: true },
  { id: 15, type: TypePlat.Puree, nom: 'Purée pommes de terre et patates douce', sansViande: true },
  { id: 16, type: TypePlat.Puree, nom: 'Purée pommes de terre et carottes', sansViande: true },

  // Hachis Parmentier
  { id: 17, type: TypePlat.Hachis, nom: 'Hachis parmentier à la chair a saucisse', sansViande: false },
  { id: 18, type: TypePlat.Hachis, nom: 'Hachis parmentier de boeuf', sansViande: false },
  { id: 19, type: TypePlat.Hachis, nom: 'Hachis parmentier de canard (confi t) patates douces / pommes de terre', sansViande: false },
  { id: 20, type: TypePlat.Hachis, nom: 'Hachis parmentier de canard pommes de terre', sansViande: false },

  // Gratins
  { id: 21, type: TypePlat.Gratin, nom: 'Gratin dauphinois', sansViande: true },
  { id: 22, type: TypePlat.Gratin, nom: 'Gratin de pommes de terre et courgettes', sansViande: true },
  { id: 23, type: TypePlat.Gratin, nom: 'Gratin de courgettes et féta', sansViande: true },
  { id: 24, type: TypePlat.Gratin, nom: 'Épinards et oeufs à la béchamel', sansViande: true },

  // Veloutés
  { id: 25, type: TypePlat.Veloute, nom: 'Velouté légumes possibilité de rajouter des croutons maisons', sansViande: true },
  { id: 26, type: TypePlat.Veloute, nom: 'Pommes de terre, courgettes et kiri', sansViande: true },
  { id: 27, type: TypePlat.Veloute, nom: 'Pommes de terre et carottes', sansViande: true },
  { id: 28, type: TypePlat.Veloute, nom: 'Lentilles corail et carottes', sansViande: true },
  { id: 29, type: TypePlat.Veloute, nom: 'Pommes de terre et poireaux', sansViande: true },
  { id: 30, type: TypePlat.Veloute, nom: 'Pommes de terre, navets, poireaux, oignons et carottes', sansViande: true },
  { id: 31, type: TypePlat.Veloute, nom: 'Panés et carottes', sansViande: false },
  { id: 32, type: TypePlat.Veloute, nom: 'Pommes de terre et brocolis', sansViande: true },
 { id: 33, type: TypePlat.Veloute, nom: 'Courges et pommes de terre', sansViande: true },
// Quiches / tartes
{ id: 34, type: TypePlat.Quiche, nom: 'Lorraine', sansViande: false },
{ id: 35, type: TypePlat.Quiche, nom: 'Butternut chèvre', sansViande: true },
{ id: 36, type: TypePlat.Quiche, nom: 'Tarte fine courgettes ricotta miel', sansViande: true },
{ id: 37, type: TypePlat.Quiche, nom: 'Fromage de chèvre et jambon', sansViande: false },
{ id: 38, type: TypePlat.Quiche, nom: 'Fromage de chèvre courgettes', sansViande: true },
{ id: 39, type: TypePlat.Quiche, nom: 'Brocolis et jambon', sansViande: false },
{ id: 40, type: TypePlat.Quiche, nom: 'Tarte Tatin à la tomates et fromage de chèvre', sansViande: true },
{ id: 41, type: TypePlat.Quiche, nom: 'Clafoutis tomates cerises et mozzarela', sansViande: true },
// Tajines
{ id: 42, type: TypePlat.Tajine, nom: 'Poulet olives citrons confits', sansViande: false },
{ id: 43, type: TypePlat.Tajine, nom: 'Agneaux pruneaux', sansViande: false },
{ id: 44, type: TypePlat.Tajine, nom: 'Agneaux abricots', sansViande: false },
{ id: 45, type: TypePlat.Tajine, nom: 'Agneaux raisins', sansViande: false },
{ id: 46, type: TypePlat.Tajine, nom: 'Poulets citrons confits carottes', sansViande: false },
{ id: 47, type: TypePlat.Tajine, nom: 'Tajine veau olives citrons confits', sansViande: false },
// Galettes
{ id: 48, type: TypePlat.Galette, nom: 'Galette maïs', sansViande: true },
{ id: 49, type: TypePlat.Galette, nom: 'Galette pommes de terre et courgettes', sansViande: true },
{ id: 50, type: TypePlat.Galette, nom: 'Galette pommes de terre et carottes', sansViande: true },
// Salades
{ id: 51, type: TypePlat.Salade, nom: 'Salade de lentilles', sansViande: true },
{ id: 52, type: TypePlat.Salade, nom: 'Salade de pois chiche', sansViande: true },
{ id: 53, type: TypePlat.Salade, nom: 'Salade thon, pommes de terre, tomates et cornichons', sansViande: false },
{ id: 54, type: TypePlat.Salade, nom: 'Salade thon, pommes de terre, tomates et haricots verts', sansViande: false },
// Soupes
{ id: 55, type: TypePlat.Soupe, nom: 'Bouillon de raviole au fromage de chèvre, crevettes et petits légumes', sansViande: false },
{ id: 56, type: TypePlat.Soupe, nom: 'Pot au feu', sansViande: false },
{ id: 57, type: TypePlat.Soupe, nom: 'Minestrone', sansViande: true },
{ id: 58, type: TypePlat.Soupe, nom: 'Soupe aux choux', sansViande: true },
{ id: 59, type: TypePlat.Soupe, nom: 'Soupe à l’oignon', sansViande: true },
// Farcis
{ id: 60, type: TypePlat.Farci, nom: 'Pommes de terre farcies oignons lardons mozzarella', sansViande: false },
{ id: 61, type: TypePlat.Farci, nom: 'Pommes de terre farcies fromage de chèvre emmental', sansViande: true },
{ id: 62, type: TypePlat.Farci, nom: 'Pommes de terre farcies mascarpone, lardons et fromage râpé', sansViande: false },
// Cakes
{ id: 63, type: TypePlat.Cake, nom: 'Cake lardons et fromage râpé', sansViande: false },
{ id: 64, type: TypePlat.Cake, nom: 'Cake fromage de chèvre et lardons', sansViande: false },
{ id: 65, type: TypePlat.Cake, nom: 'Cake courgettes et fromage de chèvre', sansViande: true },
{ id: 66, type: TypePlat.Cake, nom: 'Cake tomates séchées, fromage de chèvre et jambon', sansViande: false },
// Divers
{ id: 67, type: TypePlat.Divers, nom: 'Ratatouille avec riz', sansViande: true },
{ id: 68, type: TypePlat.Divers, nom: 'Moussaka', sansViande: false },
{ id: 69, type: TypePlat.Divers, nom: 'Légumes rôtis au four avec sauce au miel', sansViande: true },
{ id: 70, type: TypePlat.Divers, nom: 'Blanquette de veau riz', sansViande: false },
{ id: 71, type: TypePlat.Divers, nom: 'Lentilles marocaine saucisses', sansViande: false },
{ id: 72, type: TypePlat.Divers, nom: 'Lentilles marocaine végétarienne', sansViande: true },
{ id: 73, type: TypePlat.Divers, nom: 'Dahl de lentilles corail / riz blanc', sansViande: true },
{ id: 74, type: TypePlat.Divers, nom: 'Haricots verts à la tomate, champignons et pommes de terre', sansViande: true },
{ id: 75, type: TypePlat.Divers, nom: 'Flageolet, pommes de terre et lardons', sansViande: false },
{ id: 76, type: TypePlat.Divers, nom: 'Tartiflette', sansViande: false },
{ id: 77, type: TypePlat.Divers, nom: 'Chou-fleur en béchamel', sansViande: true },
{ id: 78, type: TypePlat.Divers, nom: 'Brocolis, chou-fleur et pommes de terre à la crème', sansViande: true },
{ id: 79, type: TypePlat.Divers, nom: 'Potimarron rôtis avec olives vertes', sansViande: true },
{ id: 80, type: TypePlat.Divers, nom: 'Galets de butternut aux fromage de chèvre', sansViande: true },
{ id: 81, type: TypePlat.Divers, nom: 'Carottes vichy', sansViande: true },
{ id: 82, type: TypePlat.Divers, nom: 'Légumes farcis (chair à saucisse)', sansViande: false },
{ id: 83, type: TypePlat.Divers, nom: 'Brocolis sautés à l’ail', sansViande: true },
{ id: 84, type: TypePlat.Divers, nom: 'Crevettes sautées aux sésames et à l’ail', sansViande: false },
{ id: 85, type: TypePlat.Divers, nom: 'Blanc de poulet à la crème, moutarde, champignons et riz', sansViande: false },
{ id: 86, type: TypePlat.Divers, nom: 'Bouillon boulette', sansViande: false },
{ id: 87, type: TypePlat.Divers, nom: 'Boulettes de boeuf sauce tomates avec riz, quinoa ou pâtes', sansViande: false },
{ id: 88, type: TypePlat.Divers, nom: 'Blé, riz ou perles façon cantonnais', sansViande: false },
{ id: 89, type: TypePlat.Divers, nom: 'Feuilletés au saumon, épinards et ricotta', sansViande: false },
{ id: 90, type: TypePlat.Divers, nom: 'Crêpes aux champignons, jambon et béchamel en gratin', sansViande: false },
{ id: 91, type: TypePlat.Divers, nom: 'Gnocchis de patates douces au pesto', sansViande: true },
{ id: 92, type: TypePlat.Divers, nom: 'Croque monsieur jambon ou saumon crème fromage', sansViande: false },
{ id: 93, type: TypePlat.Divers, nom: 'Poireaux ou endives au jambon à la béchamel', sansViande: false },
{ id: 94, type: TypePlat.Divers, nom: 'Boeuf carottes', sansViande: false },
{ id: 95, type: TypePlat.Divers, nom: 'Boeuf bourguignon', sansViande: false },
{ id: 96, type: TypePlat.Divers, nom: 'Jardinière de légumes, veau', sansViande: false },
{ id: 97, type: TypePlat.Divers, nom: 'Boeuf sauce soja et sésames', sansViande: false },
{ id: 98, type: TypePlat.Divers, nom: 'Croziflette', sansViande: false },
{ id: 99, type: TypePlat.Divers, nom: 'Pilons de poulets à la tomate et pommes de terre', sansViande: false },

];

