# read in all the CSVs for 3D
CF1 <- read.csv('coords_CF1_3D.csv')
CF2 <- read.csv('coords_CF2_3D.csv')
shubert <- read.csv('coords_shubert_3D.csv')
vincent <- read.csv('coords_vincent_3D.csv')

# create the name of the file
fileCF1 <- "CF1"
fileCF2 <- "CF2"
fileShubert <- "shubert"
fileVincent <- "vincent"

# add the new column filling everything with the name set above
CF1$File <- fileCF1
CF2$File <- fileCF2
shubert$File <- fileShubert
vincent$File <- fileVincent

# save them all as new files
write.csv(CF1, "updated_CF1_3D.csv", row.names = FALSE)
write.csv(CF2, "updated_CF2_3D.csv", row.names = FALSE)
write.csv(shubert, "updated_shubert_3D.csv", row.names = FALSE)
write.csv(vincent, "updated_vincent_3D.csv", row.names = FALSE)

# combine the new .csv files
combined_3D <- rbind(CF1, CF2, shubert, vincent)
write.csv(combined_3D, "combined_data_3D.csv", row.names = FALSE)