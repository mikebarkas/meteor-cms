#
# Configuration for Compass/Sass
#

#
# Environment Variable.
#
environment = :develoment
#environment = :production


#
# Directory Structure.
#
css_dir = "css"
sass_dir = "sass"
images_dir = "css/images"


#
# Output Style.
#
# Options - :expanded :nested :compact :compressed
output_style = (environment == :develoment) ? :compact : :compressed


#
# Enable Relative Paths.
#
relative_assets = true


#
# Sass Options.
#
sass_options = (environment == :develoment) ? {:debug_info => false} : {:always_update => true}