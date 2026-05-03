{
  pkgs ? import <nixpkgs> { },
}:

let
  unstable =
    import
      (fetchTarball {
        url = "https://github.com/NixOS/nixpkgs/archive/nixos-unstable.tar.gz";
        sha256 = "17pr9kf46019gf9nkg7jsa0h81adwbkdjwlk0i57nycnhad3vph1";
      })
      {
        system = pkgs.stdenv.hostPlatform.system;
      };
in
pkgs.mkShell {
  buildInputs = [ unstable.zola pkgs.exiftool ];
}
