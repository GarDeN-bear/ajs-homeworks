import Team from '../Team';


describe('Team', () => {
  let team;
  let characters = [{name: 'Red'}, {name: 'Green'}, {name: 'Blue'}];

  beforeEach(() => {
    team = new Team();
  });

  test('Add character', () => {
    team.add(characters[0]);
    expect(team.members).toContain(characters[0]);
    expect(() => {team.add(characters[0])})
        .toThrow('This character is in the team!');
  });

  test('Add all', () => {
    team.addAll(...characters);
    expect(team.members).toContain(...characters);
  });

  test('To array', () => {
    team.addAll(...characters);
    expect(team.toArray()).toEqual(characters);
  });
});