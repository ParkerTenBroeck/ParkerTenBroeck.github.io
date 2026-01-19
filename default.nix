{
  pkgs ? import <nixpkgs> { },
}:

let
  unstable =
    import
      (fetchTarball {
        url = "https://github.com/NixOS/nixpkgs/archive/nixos-unstable.tar.gz";
        sha256 = "sha256:09qwbfkvk3jmqlpgis4v1m1fmh7zffi8drybb03mjqa95bynbs99";
      })
      {
        system = pkgs.stdenv.hostPlatform.system;
      };
in
pkgs.mkShell {
  buildInputs = [ unstable.zola pkgs.exiftool ];
}
