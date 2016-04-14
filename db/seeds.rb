#require 'mlb'
role_model =  RailsAdmin::AbstractModel.new(Role)
user_model     = RailsAdmin::AbstractModel.new(User)


admin_role = role_model.new( name: 'admin')
admin_role.save
# keep email empty, or rails_admin get gravtar by email.
user_model.new(:name=>'admin', :account => 'admin', :email => '', :password => 'password', :roles=>[ admin_role ]).save

subject_model = RailsAdmin::AbstractModel.new(Subject)
lesson_model = RailsAdmin::AbstractModel.new(Lesson)

subject_params = [
  ['四级单词', 3627],['六级单词', 6231],['考研单词', 6287],
  ['雅思单词', 6558],['托福单词', 4686],['GMAT单词', 3004],
  ['SAT单词', 2950],['高考单词', 3120],['高中单词', 3120],
  ['中考单词', 2364],['初中单词', 2364],['新概念一册', 779],
  ['新概念二册', 753],['新概念三册', 855],['新概念四册', 586] ]


subject_params.each{|attrs|
  subject = subject_model.new( name: attrs[0], word_count: attrs[1])
  subject.save
}

Lesson_params = [ [30], [30], [30], [30]]
Lesson_params.each{|attrs|
  lesson = lesson_model.new( word_count: attrs[0])
  lesson.subject = Subject.first
  lesson.save
}

#MLB::Team.all.each do |mlb_team|
#  unless league = league_model.where(:name => mlb_team.league).first
#    league = league_model.new(:name => mlb_team.league)
#    league.save
#  end
#  unless division = division_model.where(:name => mlb_team.division).first
#    division = division_model.new(:name => mlb_team.division, :league => league)
#    division.save
#  end
#  unless team = team_model.where(:name => mlb_team.name).first
#    team = team_model.new(:name => mlb_team.name, :logo_url => mlb_team.logo_url, :manager => mlb_team.manager, :ballpark => mlb_team.ballpark, :mascot => mlb_team.mascot, :founded => mlb_team.founded, :wins => mlb_team.wins, :losses => mlb_team.losses, :win_percentage => ("%.3f" % (mlb_team.wins.to_f / (mlb_team.wins + mlb_team.losses))).to_f, :division => division)
#    team.save
#  end
#  mlb_team.players.reject{|player| player.number.nil?}.each do |player|
#    player_model.new(:name => player.name, :number => player.number, :position => player.position, :team => team).save
#  end
#end

puts "Seeded #{user_model.count} Users, #{subject_model.count} subjects,  #{lesson_model.count} lessons"
