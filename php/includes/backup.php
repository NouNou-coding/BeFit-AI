<?php
$backup_file = 'backups/fitai_db_' . date("Y-m-d-H-i-s") . '.sql';
exec("mysqldump --user=root --password= --host=localhost fitai_db > $backup_file");
echo "Backup created: " . $backup_file;
?>